import { /*ITictactoe,*/ ITictactoeState, initialTictactoeState } from 'models/ITictactoe';

const WINNING_COMBOS: number[][][] = [
  [
    [0, 0],
    [0, 1],
    [0, 2],
  ], // Left side
  [
    [0, 0],
    [1, 0],
    [2, 0],
  ], // Top side
  [
    [2, 0],
    [2, 1],
    [2, 2],
  ], // Right side
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ], // Bottom side
  [
    [1, 0],
    [1, 1],
    [1, 2],
  ], // Middle vertical
  [
    [0, 1],
    [1, 1],
    [2, 1],
  ], // Middle horizontal
  [
    [0, 0],
    [1, 1],
    [2, 2],
  ], // First diagonal
  [
    [0, 2],
    [1, 1],
    [2, 0],
  ], // Second diagonal
];

export default class Tictactoe {
  state: ITictactoeState = Object.assign({}, initialTictactoeState);

  constructor(_state: ITictactoeState) {
    this.reset(_state);
  }

  get board() {
    return this.state.tictactoe.board;
  }

  get nextPlayer() {
    return this.state.tictactoe.nextPlayer;
  }

  get winner() {
    return this.state.tictactoe.winner;
  }

  get emptyCells() {
    const cells = [];

    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (!this.board[x][y]) cells.push([x, y]); // Empty spaces will be `0` (falsey)
      }
    }

    return cells;
  }

  hasWon = ([x1, y1]: number[], [x2, y2]: number[], [x3, y3]: number[]): number => {
    const player = this.board[x1][y1];
    return this.board[x2][y2] === player && this.board[x3][y3] === player ? player : 0;
  };

  get getEmptyCells(): number[][] {
    const cells: number[][] = [];
  
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        if (!this.board[x][y]) cells.push([x, y]); // Empty spaces will be `0` (falsey)
      }
    }
  
    return cells;
  };
  
  get getWinner(): number {
    const emptyCells: number[][] = this.getEmptyCells;

    if (emptyCells.length > 4) return 0; // Game cannot be won until the 5th move
  
    let combosLeft = WINNING_COMBOS.length;
  
    let winner = 0;
  
    do {
      winner = this.hasWon.apply(this, WINNING_COMBOS[combosLeft - 1] as [number[], number[], number[]]);
  
      combosLeft--;
    } while (!winner && combosLeft > 0);
  
    // -1 for draw, 0 for no win, 1 or 2 for winning player
    return !winner && emptyCells.length === 0 ? -1 : winner;
  };

  reset(_state: ITictactoeState) {
    //console.log(_state.tictactoe);
    this.state = {
      ...this.state,
      tictactoe: {
        ...this.state.tictactoe,
        board: _state.tictactoe.board, nextPlayer: _state.tictactoe.nextPlayer, winner: _state.tictactoe.winner
      }
    };

    this.state.tictactoe.winner = this.getWinner;
    //console.log(this.state.tictactoe);
  }

  validMove(i: number, j: number): boolean {
    return i >= 0 && i < 3 && j >= 0 && j < 3;
  }

  makeMove(i: number, j: number) {
    //console.log('i: ' + i + ' j: ' + j);
    // Return early on invalid move
    if (!this.validMove(i, j) || this.winner !== 0 || this.board[j][i]) return this.state.tictactoe;

    // Set chosen space to "next player" ID
    //console.log(this.state.tictactoe.nextPlayer);
    //console.log(this.state.tictactoe.board);
    this.state.tictactoe.board =
      this.state.tictactoe.board.map((col, c) =>
      c === j
        ? col.map((row, r) =>
            r === i
              ? this.state.tictactoe.nextPlayer
              : row
          )
        : col
      );

      this.state.tictactoe.nextPlayer = this.state.tictactoe.nextPlayer === 1 ? 2 : 1;
      this.state.tictactoe.winner = this.getWinner;

    return this.state;
  }

  get compMove(): {i: number, j: number} {
    return {i: 1, j: 1 };
  }
}
