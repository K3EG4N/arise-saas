import { Cross } from "@/icons/Regular/Cross";
import { Button } from "./Button";
import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import type { IDrawer } from "@/interfaces/IDrawer";

export const Drawer = ({
  isOpen,
  onClose,
  title,
  primaryButtonLabel,
  description,
  onSuccess,
  children,
}: IDrawer) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (isOpen) {
      flushSync(() => setMounted(true));

      rafRef.current = requestAnimationFrame(() => {
        setVisible(true);
        rafRef.current = null;
      });
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timer);
    }

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <article
      className={`absolute top-0 left-0 z-9999 flex h-full w-full items-center justify-end transition-all duration-300 ease-in-out ${visible ? "bg-neutral-600/25 backdrop-blur-[1.5px]" : "bg-neutral-600/0 backdrop-blur-none"} overflow-hidden`}
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
    >
      <aside
        className={`relative flex h-full w-100 flex-col gap-2 bg-white p-5 transition-transform duration-300 ease-in-out ${visible ? "translate-x-0" : "translate-x-full"}`}
      >
        <header>
          <h1 className="font-outfit text-xl font-medium">{title}</h1>
          <span className="text-sm text-neutral-500">{description}</span>
          <div
            onClick={onClose}
            className="absolute top-5 right-5 cursor-pointer rounded p-1 text-neutral-500 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900"
          >
            <Cross />
          </div>
        </header>
        <section className="flex-1">{children}</section>
        <footer className="flex justify-end border-t border-neutral-200">
          <div className="flex gap-2 pt-3">
            <Button label="Cancel" appareance="outline" onClick={onClose} />
            <Button
              label={primaryButtonLabel || "Create"}
              onClick={onSuccess}
            />
          </div>
        </footer>
      </aside>
    </article>
  );
};
