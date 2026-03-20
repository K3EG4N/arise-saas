import { Cross } from "@/icons/Regular/Cross";
import { Button } from "./Button";
import { useEffect, useState } from "react";
import type { IModal } from "@/interfaces/IModal";

export const Modal = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}: IModal) => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setActive(true));
      });
    } else {
      setActive(false);
    }
  }, [isOpen]);

  const handleClose = () => {
    setActive(false);
    onClose?.();
  };

  const handleTransitionEnd = () => {
    if (!active) setVisible(false);
  };

  if (!visible) return null;

  return (
    <section
      className={`absolute top-0 left-0 z-9999 flex h-full w-full items-center justify-center bg-neutral-600/25 backdrop-blur-[1.5px] transition-opacity duration-300 ease-in-out ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <article
        onTransitionEnd={handleTransitionEnd}
        className={`relative w-120 rounded border border-neutral-300 bg-white p-4 transition-all duration-300 ease-in-out ${
          active
            ? "translate-y-0 scale-100 opacity-100"
            : "-translate-y-4 scale-95 opacity-0"
        }`}
      >
        <h1 className="font-outfit text-xl font-medium">{title}</h1>
        <span className="text-sm text-neutral-500">{description}</span>
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={handleClose}
        >
          <Cross />
        </div>
        <div className="bg-red-400f py-2.5 text-sm">{children}</div>
        <div className="flex justify-end">
          <div className="flex w-1/2 gap-2">
            <Button label="Cancel" appareance="outline" onClick={handleClose} />
            <Button label="Save" />
          </div>
        </div>
      </article>
    </section>
  );
};
