import { type typeTURNS } from "../utils/global";

export function ModalWinning({wining, visible, clickCerrar}: {wining: typeTURNS | null, visible: boolean, clickCerrar: () => void}) {
  if (!visible) return null;

  return (
    <div
      className="z-10 fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center"
    >
      <div className="
      relative text-center
      bg-(--color-secundary) text-(--color-text)
      border-2 border-slate-700
      rounded-2xl py-20 px-16
      flex flex-col gap-2
      ">
        <h1 className="text-4xl font-bold">¡Ganaste!</h1>

        <button className="
        absolute top-4 right-4
        px-3 py-1
        bg-[var(--color-text)]
        text-[var(--color-secundary)]
        hover:scale-105 
        hover:bg-[var(--color-text/40)]
        rounded-xl 
        shadow-lg 
        cursor-pointer
        " onClick={clickCerrar}>Cerrar</button>

        <p className="text-xl">
          ¡Ha ganado ({wining})!
        </p>
      </div>
    </div>
  );
}
