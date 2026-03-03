import { useState } from "react";

import { type typeTURNS, TURNS, winningCombinations } from "../utils/global";

export function useSelect() {
  const [board, setBoard] = useState<(typeTURNS | null)[]>(Array(9).fill(null));
  const [winner, setWinner] = useState<typeTURNS| null>(null);
  const [visible, setVisible] = useState(false);

  const [turn, setTurn] = useState(TURNS.X);

  const clickSquare = (index: number) => {
    if (board[index]) return;
    if (winner) return;

    const new_board = [...board];
    new_board[index] = turn;

    for (let index = 0; index < winningCombinations.length; index++) {
      const [a, b, c] = winningCombinations[index];

      if (new_board[a] && new_board[a] === new_board[b] && new_board[a] === new_board[c]) {
        console.log("ha ganado " + turn);
        setWinner(turn);
        setVisible(true);
        return
      }
    }

    setBoard(new_board);
    setTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  }

  const clearAll = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    setVisible(false);
  };

  const clickCerrar = () => {
    setVisible(false);
  };

  return { board, turn, setTurn, clickSquare, clearAll, clickCerrar, winner, visible };
}