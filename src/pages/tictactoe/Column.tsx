import React from 'react';

import { TBoard } from 'models/ITictactoe';
import Cell from './Cell';

import { useColumnStyles  } from "styles/columnStyles";

export interface IColumnProps {
  board: TBoard,
  row: number,
}

const Column: React.FC<IColumnProps> = ({ board, row }) => {
  const { classes } = useColumnStyles();

  return (
    <div className={classes.root}>
      {board.map((value, i) => (
        Math.floor(i / 3) === row
        ? <Cell key={`${i}`} value={value} cell={ i } />
        : null
      ))}
    </div>
  );
};

export default Column;
