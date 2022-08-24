export interface ITictactoe {
  board: number[][];
  nextPlayer: number;
  winner: number;
}

export interface ITictactoeState {
  tictactoe: ITictactoe;
}

export const initialBoard: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

export const initialTictactoe: ITictactoe = {
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  nextPlayer: 1,
  winner: 0,
};

export const initialTictactoeState: ITictactoeState = {
  tictactoe: initialTictactoe
};
