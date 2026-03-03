
export function Container({  children, className }: { children: React.ReactNode, className?: string }) {

  return (
    <div
        className={`
        bg-[var(--color-secundary)] text-[var(--color-text)] 
        border-2 border-slate-700 rounded-2xl p-16
        ${className}
      `}
      >
      {children}
    </div>
  );
}

