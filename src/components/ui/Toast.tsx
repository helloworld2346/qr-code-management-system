import { useToastStore } from "@/store/toast.store";

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);

  return (
    <div className="fixed top-0 right-0 p-4 no-print">
      {toasts.map((t) => (
        <div
          key={t.id}
          className="mb-2 rounded bg-surface px-4 py-2 text-text shadow"
          onClick={() => remove(t.id)}
        >
          {t.message}
        </div>
      ))}
    </div>
  );
}
