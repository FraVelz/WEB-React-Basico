// Pequeño componente interno para no repetir clases de Tailwind

export function Button({ onClick, children }: { onClick: () => void, children: React.ReactNode }) {
  return (
    <button
      className="cursor-pointer border-4 text-[var(--color-primary)] border-[var(--color-border)] hover:text-[var(--color-secundary)] hover:bg-[var(--color-border)] active:scale-95 p-2 rounded-2xl transition-all"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
