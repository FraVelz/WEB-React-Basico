import { useSelect } from "./hooks/useSelect";

import { Container } from "../components/Container";

import { Square } from "./components/Square";
import { ModalWinning } from "./components/modalWinning";

export default function TicTaeToe() {
  const { board, turn, clickSquare, clickCerrar, clearAll, winner, visible } = useSelect();

  return (
    <div className="flex items-center justify-center min-h-screen
    bg-gradient-to-br from-transparent to-[var(--color-secundary)]
    text-[var(--color-text)]
    p-4
    ">

      <Container className="flex flex-col gap-6 justify-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold tracking-wider drop-shadow-lg">
          3 en Raya
        </h1>

        {/* Tablero */}
        <div className="container grid grid-cols-3 grid-rows-[1fr_1fr_1fr] text-[var(--color-border)] gap-2 w-full aspect-square">
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <Square
                key={i}
                index={i}
                board={board}
                click_={clickSquare}
              />
            ))}
        </div>

        {/* Estado */}
        <p className="text-lg tracking-wide">
          Turno de:{" "}
          <span className="font-bold text-xl">{turn}</span>
        </p>

        {/* Botón */}
        <button
          className="
          px-6 
          py-3 
          bg-[var(--color-text)]
          text-[var(--color-secundary)]
          hover:scale-105 
          hover:bg-[var(--color-text/40)]
          rounded-xl 
          shadow-lg 
          cursor-pointer
          transition-all 
          duration-300
        "
          onClick={clearAll}
        >
          Reiniciar
        </button>
      </Container>


    {visible && <ModalWinning clickCerrar={clickCerrar} wining={winner} visible={visible} />}
    </div>
  );
}
