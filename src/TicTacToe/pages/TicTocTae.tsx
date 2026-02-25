import { useState } from "react";
import "./tictoctae.css";

function animation() {
  let cont = document.getElementById("container") as HTMLElement | null;
  if (!cont) return;

  cont.onmousemove = (e) => {
    for (const card of document.getElementsByClassName(
      "elements",
    ) as HTMLCollectionOf<HTMLElement>) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    }
  };
}

function Square({
  index,
  TURNS,
  turn,
  setturn,
  board,
  setboard,
}: {
  index: number;
  TURNS: any;
  turn: any;
  setturn: any;
  board: any;
  setboard: any;
}) {
  const click_ = (): void => {
    if (board[index]) return;

    let new_board = [...board];
    new_board[index] = turn;

    setboard(new_board);
    setturn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  return (
    <button
      id="elements"
      className={`
              btn-${index}
              bg-white/20 
              hover:bg-white/40 
              active:scale-95
              transition-all 
              duration-300 
              rounded-lg
              flex 
              items-center 
              justify-center 
              text-3xl 
              font-extrabold 
              text-white 
              cursor-pointer 
            `}
      onClick={click_}
    >
      {board[index]}
    </button>
  );
}

export default function TicTaeToe() {
  let [board, setboard] = useState<(string | null)[]>(Array(9).fill(null));

  const TURNS = {
    X: "X",
    O: "O",
  };
  let [turn, setturn] = useState(TURNS.X);

  animation();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 to-slate-700 p-4">
      <div className="w-[340px] bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-white mb-6 tracking-wider drop-shadow-lg">
          3 en Raya
        </h1>

        {/* Tablero */}
        <div className="container grid grid-cols-3 grid-rows-[1fr_1fr_1fr] gap-2 w-full aspect-square">
          {Array(9)
            .fill(null)
            .map((_, i) => (
              <Square
                key={i}
                index={i}
                TURNS={TURNS}
                turn={turn}
                setturn={setturn}
                board={board}
                setboard={setboard}
              />
            ))}
        </div>

        {/* Estado */}
        <p className="text-white mt-6 text-lg tracking-wide">
          Turno de:{" "}
          <span className="font-bold text-slate-200 text-xl">{turn}</span>
        </p>

        {/* Botón */}
        <button
          className="
        mt-6 
        px-6 
        py-3 
        bg-white 
        text-slate-700 
        font-bold 
        rounded-xl 
        shadow-lg 
        hover:scale-105 
        hover:bg-slate-300
        cursor-pointer
        transition-all 
        duration-300
      "
          onClick={() => {
            setboard(Array(9).fill(null));
            setturn(TURNS.X);
          }}
        >
          Reiniciar
        </button>
      </div>
    </div>
  );
}
