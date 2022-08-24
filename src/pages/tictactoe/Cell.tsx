import React from 'react';

import { useAppDispatch } from 'redux/hooks';
import { makeMove } from 'redux/slices/tictactoeSlice';
import { useCellStyles  } from "styles/cellStyles";

export interface ICellProps {
  value: number,
  i: number,
  j: number,
}

const Cell: React.FC<ICellProps> = ({ value, i, j }): React.ReactElement => {
  const { classes } = useCellStyles();
  const classNames: string[] = [classes.root];

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(makeMove({ i, j }));
  };
  
  const display = value === 1 ? 'X' : value === 2 ? 'O' : String.fromCharCode(160); // &nbsp;
  if (display === String.fromCharCode(160)) {
    classNames.push(classes.open);
  }

  return (
    <div className={classNames.join(' ')} onClick={handleClick}>
      <div className={classes.symbol}>{display}</div>
    </div>
  );
};

export default Cell;
