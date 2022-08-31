import React from 'react';

import { TBoard } from 'models/ITictactoe';
import Cell from './Cell';

import 'styles/rowStyles.scss';

export interface IColumnProps {
  board: TBoard,
  row: number,
}

const Row: React.FC<IColumnProps> = ({ board, row }) => {
  return (
    <div className="row-root">
      {board.map((value, i) => (
        Math.floor(i / 3) === row
        ? <Cell key={`${i}`} value={value} cell={ i } />
        : null
      ))}
    </div>
  );
};

export default Row;
