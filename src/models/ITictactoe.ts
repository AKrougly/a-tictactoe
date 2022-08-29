export type TCell = number;
export type TCells = number[];
export type TBoard = TCell[];

export interface ITictactoe {
  board: TBoard;
  nextPlayer: number;
  winner: number;
}

export interface ITictactoeState {
  tictactoe: ITictactoe;
}

export const initialBoard: TBoard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0,
];

export const initialTictactoe: ITictactoe = {
  board: initialBoard,
  nextPlayer: 1,
  winner: 0,
};

export const initialTictactoeState: ITictactoeState = {
  tictactoe: initialTictactoe
};
