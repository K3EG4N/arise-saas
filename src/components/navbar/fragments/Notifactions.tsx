import { useState, useRef, useEffect } from "react";
import { useNotification } from "@/hooks/useNotifications";
import { Bell } from "@/icons/Regular/Bell";

export const Notifications = () => {
  const { loading, notifications } = useNotification();
  const [open, setOpen] = useState(false);
  const [read, setRead] = useState<Set<number>>(new Set());
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOpen = () => {
    setOpen((prev) => !prev);
    if (!open) {
      setRead(new Set(notifications.map((_, i) => i)));
    }
  };

  return (
    <section className="relative inline-block" ref={panelRef}>
      <div className="relative cursor-pointer" onClick={handleOpen}>
        {notifications.length != 0 && (
          <div className="absolute -top-0.5 right-1 size-1.5 rounded-full bg-red-400" />
        )}
        <Bell />
      </div>

      {open && (
        <div className="animate-in fade-in zoom-in-95 absolute top-[calc(100%+10px)] right-0 z-50 w-80 origin-top-right overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl shadow-black/10 duration-200">
          <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3.5">
            <span className="text-sm font-semibold tracking-tight text-gray-900">
              Notifications
            </span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center gap-1.5 py-10">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-300"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          ) : notifications.length === 0 ? (
            /* Empty state */
            <div className="flex flex-col items-center justify-center gap-2 py-12 text-gray-400">
              <span className="text-3xl opacity-40">🔔</span>
              <span className="text-sm font-medium">You're all caught up!</span>
            </div>
          ) : (
            /* List */
            <div className="max-h-80 divide-y divide-gray-50 overflow-y-auto">
              {notifications.map((it, i) => {
                const isUnread = !read.has(i);
                return (
                  <div
                    key={i}
                    onClick={() => setRead((prev) => new Set([...prev, i]))}
                    className={`relative flex cursor-pointer items-start gap-3 px-4 py-3.5 transition-colors duration-150 ${isUnread ? "bg-red-50/60 hover:bg-red-50" : "hover:bg-gray-50"}`}
                  >
                    {/* Unread dot */}
                    {isUnread && (
                      <span className="absolute top-1/2 left-1.5 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-red-400" />
                    )}

                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-red-100 to-red-200 text-base">
                      🔔
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[13px] leading-snug font-semibold text-gray-900">
                        {it.title}
                      </p>
                      {it.subTitle && (
                        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-gray-500">
                          {it.subTitle}
                        </p>
                      )}
                      {it.time && (
                        <p className="mt-1 text-[11px] font-medium text-gray-400">
                          {it.time}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
};
