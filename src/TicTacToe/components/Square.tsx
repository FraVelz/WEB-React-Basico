
type SquareProps = {
  index: number;
  board: (string | null)[];
  click_: (index: number) => void;
};

export function Square({ click_, board, index }: SquareProps) {

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
      onClick={() => click_(index)}
    >
      {board[index]}
    </button>
  );
}

