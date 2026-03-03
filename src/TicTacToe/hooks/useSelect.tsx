import { useState } from "react";

import { TURNS, winningCombinations } from "../utils/global";

export function useSelect() {
  let [board, setboard] = useState<(string | null)[]>(Array(9).fill(null));

  let [turn, setturn] = useState(TURNS.X);

  const click_ = (index: number) => {
    if (board[index]) return;

    let new_board = [...board];
    new_board[index] = turn;

    for (let index = 0; index < winningCombinations.length; index++) {
      const [a, b, c] = winningCombinations[index];

      if (new_board[a] && new_board[a] === new_board[b] && new_board[a] === new_board[c]) {
        console.log("ha ganado " + turn);
        break;
      }
    }

    setboard(new_board);
    setturn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }


  const clearAll = () => {
    setboard(Array(9).fill(null));
    setturn(TURNS.X);
  };

  return { board, turn, setturn, click_, clearAll };
}