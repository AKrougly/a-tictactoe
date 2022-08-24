import React from 'react';

import Cell from './Cell';

import { useColumnStyles  } from "styles/columnStyles";

export interface IColumnProps {
  column: number[],
  j: number,
}

const Column: React.FC<IColumnProps> = ({ column, j }) => {
  const { classes } = useColumnStyles();

  return (
    <div className={classes.root}>
      {column.map((value, i) => (
        <Cell key={`${i}_${j}`} value={value} i={i} j={j} />
      ))}
    </div>
  );
};

export default Column;
