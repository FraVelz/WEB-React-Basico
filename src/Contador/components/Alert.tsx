export function Alert({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="absolute top-4 rounded-md bg-amber-200 font-bold text-[var(--color-secundary)] p-2">
      No se puede números negativos
    </div>
  );
}
