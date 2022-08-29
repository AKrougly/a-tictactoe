import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector,  } from 'redux/hooks';
import { selectTictactoeState, resetTictactoe, makeMove  } from 'redux/slices/tictactoeSlice';
import { initialTictactoe } from 'models/ITictactoe';
import Tictactoe from 'redux/Tictactoe';
import TTTComPlay from 'redux/tttcomplay';

import Column from './Column';
import { useTictactoeStyles  } from "styles/tictactoeStyles";

export const CTictactoe = new Tictactoe(initialTictactoe);

const TictactoeGame: React.FC = (): React.ReactElement => {
  const { classes } = useTictactoeStyles();
  const dispatch = useAppDispatch();
  const tictactoeState = useAppSelector(selectTictactoeState);
  CTictactoe.reset(tictactoeState.tictactoe);

  let message = 'Game on! :)';

  const handleClick = () => {
    dispatch(resetTictactoe());
  }

  if (tictactoeState.tictactoe.winner > 0) {
    message = 'Player ' + tictactoeState.tictactoe.winner + ' has won the game!';
  } else if (tictactoeState.tictactoe.winner === -1) {
    message = 'The game has been drawn!';
  }

  useEffect(() => {
    if (tictactoeState.tictactoe.winner === 0 && tictactoeState.tictactoe.nextPlayer === 2) {
      dispatch(makeMove(TTTComPlay(CTictactoe)));
    }
  });

  return (
    <div className={classes.root}>
      {tictactoeState.tictactoe.board.map((cell, i) => (
        i % 3 === 0
        ? <Column key={`${i}`} board={tictactoeState.tictactoe.board} row={Math.floor(i / 3)} />
        : null
      ))}
      <div className={classes.message}>
        {message}
      </div>
      <button className={classes.btn} onClick={handleClick}>
        Reset Game
      </button>
      <div className={classes.github}>
        <iframe
          frameBorder="0"
          height="20px"
          scrolling="0"
          src="https://ghbtns.com/github-btn.html?user=AKrougly&repo=a-tictactoe&type=star"
          title="github-star"
          width="51px"
        />
        <iframe
          frameBorder="0"
          height="20px"
          scrolling="0"
          src="https://ghbtns.com/github-btn.html?user=AKrougly&type=follow"
          title="github-follow"
          width="123px"
        />
      </div>
    </div>
  );
};

export default TictactoeGame;
