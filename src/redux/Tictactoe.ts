import { ITictactoe, initialTictactoe, TBoard, TCell, TCells } from 'models/ITictactoe';
/*
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
*/
const WINNING_COMBOS: TCells[] = [
  [0, 3, 6], // Left side
  [0, 1, 2], // Top side
  [2, 5, 8], // Right side
  [6, 7, 8], // Bottom side
  [1, 4, 7], // Middle vertical
  [3, 4, 5], // Middle horizontal
  [0, 4, 8], // First diagonal
  [2, 4, 6], // Second diagonal
];

export default class Tictactoe {
  tictactoe: ITictactoe = Object.assign({}, initialTictactoe);

  constructor(_tictactoe: ITictactoe) {
    this.reset(_tictactoe);
  }

  reset(_tictactoe: ITictactoe) {
    this.tictactoe = {
      ...this.tictactoe,
      board: _tictactoe.board, nextPlayer: _tictactoe.nextPlayer, winner: _tictactoe.winner
    };

    this.tictactoe.winner = this.getWinner;
  }

  get board() {
    return this.tictactoe.board;
  }

  get nextPlayer() {
    return this.tictactoe.nextPlayer;
  }

  get winner() {
    return this.tictactoe.winner;
  }

  hasWon = (threeCells: TCell[]): number => {
    const player = this.board[threeCells[1]];
    return this.board[threeCells[0]] === player && player === this.board[threeCells[2]] ? player : 0;
  };

  get getEmptyCells(): TCells {
    const cells: TCells = [];
  
    for (let i = 0; i < 9; i++) {
      if (!this.board[i]) cells.push(i);
    }

    return cells;
  };
  
  get getWinner(): number {
    //console.log('getWinner');
    const emptyCells: TCells = this.getEmptyCells;

    if (emptyCells.length > 4) return 0; // Game cannot be won until the 5th move
  
    let combosLeft = WINNING_COMBOS.length;
  
    let winner = 0;
  
    do {
      winner = this.hasWon.apply(this, [WINNING_COMBOS[combosLeft - 1] as TCell[]]);
  
      combosLeft--;
    } while (!winner && combosLeft > 0);
  
    // -1 for draw, 0 for no win, 1 or 2 for winning player
    return !winner && emptyCells.length === 0 ? -1 : winner;
  };

  validMove(move: TCell): boolean {
    return move >= 0 && move < 9;
  }

  setCell(board: TBoard, move: TCell): TBoard {
    return board.map((cell, i) =>
    i === move
    ? this.tictactoe.nextPlayer
    : cell
    )
  }

  makeMove(move: TCell) {
    // Return early on invalid move
    //console.log('i:'+i+' j:'+j+' player:'+this.tictactoe.nextPlayer+' winner:'+this.winner+' board[j][i]:'+this.board[j][i]);
    if (!this.validMove(move) || this.winner !== 0 || this.board[move]) return this.tictactoe;

    // Set chosen space to "next player" ID
    this.tictactoe.board = this.setCell(this.tictactoe.board, move);
    this.tictactoe = {
      board: this.tictactoe.board,
      nextPlayer: this.tictactoe.nextPlayer === 1 ? 2 : 1,
      winner: this.getWinner,
    }

    return this.tictactoe;
  }
}
