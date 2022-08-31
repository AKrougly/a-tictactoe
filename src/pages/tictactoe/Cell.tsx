import React from 'react';

import { TCell } from 'models/ITictactoe';
import { useAppDispatch } from 'redux/hooks';
import { makeMove } from 'redux/slices/tictactoeSlice';

import 'styles/cellStyles.scss';

export interface ICellProps {
  value: number,
  cell: TCell,
}

const Cell: React.FC<ICellProps> = ({ value, cell }): React.ReactElement => {
  const classNames: string[] = ["root"];

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(makeMove(cell));
  };
  
  const display = value === 1 ? 'X' : value === 2 ? 'O' : String.fromCharCode(160); // &nbsp;
  if (display === String.fromCharCode(160)) {
    classNames.push("open");
  }

  return (
    <div className={classNames.join(' ')} onClick={handleClick}>
      <div className="symbol">{display}</div>
    </div>
  );
};

export default Cell;
