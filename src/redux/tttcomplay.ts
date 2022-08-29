/**
 * Undefeatable TicTacToe
 *
 * Computer player logic
 *
 * Approach:
 * - Use minimax algorithm
 * Author:
 *   https://github.com/awkaiser/react-tictactoe
 */

import { TBoard, TCell, TCells } from 'models/ITictactoe';
import Tictactoe from 'redux/Tictactoe';

const CORNERS: TCells = [0, 2, 6, 8];
const MAX_DEPTH = 9;

function score(winner: number, depth: number = 0) {
  if (!winner) return 0;

  return depth + (winner === 1 ? MAX_DEPTH : -MAX_DEPTH);
}

function minimax(cTictactoe: Tictactoe, depth = 0): { move: TCell, score: number } {
  if (depth >= MAX_DEPTH) throw new Error('Minimax reached impossible depth');

  if (cTictactoe.winner !== 0) return { move: -1, score: score(cTictactoe.winner, depth) };

  let moves: TCells = [];
  let scores: number[] = [];

  cTictactoe.getEmptyCells.forEach((move) => {
    const cloneTictactoe: Tictactoe = new Tictactoe(cTictactoe.tictactoe);
    cloneTictactoe.makeMove(move);
    const { score } = minimax(cloneTictactoe, depth + 1);

    moves.push(move);
    scores.push(score);
  });

  const index = scores.indexOf(
    Math[cTictactoe.nextPlayer === 1 ? 'max' : 'min'].apply(Math, scores)
  );

  return { move: moves[index], score: scores[index] };
}

function openingMove(board: TBoard): TCell {
  // Play center or random corner
  return (
    board[4] === 0
    ? 4
    : CORNERS[Math.floor(Math.random() * 4)]
  )
}

export default function TTTComPlay(cTictactoe: Tictactoe): TCell {
  // Reduce minimax search space with opening move
  return cTictactoe.getEmptyCells.length === 8 ? openingMove(cTictactoe.board) : minimax(cTictactoe).move;
}
