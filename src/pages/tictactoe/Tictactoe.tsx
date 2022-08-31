import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector,  } from 'redux/hooks';
import { selectTictactoeState, resetTictactoe, makeMove  } from 'redux/slices/tictactoeSlice';
import { initialTictactoe } from 'models/ITictactoe';
import Tictactoe from 'redux/Tictactoe';
import TTTComPlay from 'redux/tttcomplay';

import Row from './Row';
import 'styles/tictactoeStyles.scss';

export const CTictactoe = new Tictactoe(initialTictactoe);

const TictactoeGame: React.FC = (): React.ReactElement => {
  const [autoPlay, setAutoPlay] = useState(false);

  const dispatch = useAppDispatch();
  const tictactoeState = useAppSelector(selectTictactoeState);
  CTictactoe.reset(tictactoeState.tictactoe);

  let message = 'Game on! :)';

  const handleResetClick = () => {
    dispatch(resetTictactoe());
    setAutoPlay(false );
  }

  const handleAutoPlayClick = () => {
    setAutoPlay(true);
  }

  if (tictactoeState.tictactoe.winner > 0) {
    message = 'Player ' +
      (autoPlay ? "MegaBrain" : tictactoeState.tictactoe.winner) + ' has won the game!';
  } else if (tictactoeState.tictactoe.winner === -1) {
    message = 'The game has been drawn!';
  }

  useEffect(() => {
    if (autoPlay && tictactoeState.tictactoe.winner === 0 && tictactoeState.tictactoe.nextPlayer === 2 ) {
      dispatch(makeMove(TTTComPlay(CTictactoe)));
    }
  });

  return (
    <div className="tictactoe-root">
      {tictactoeState.tictactoe.board.map((cell, i) => (
        i % 3 === 0
        ? <Row key={`${i}`} board={tictactoeState.tictactoe.board} row={Math.floor(i / 3)} />
        : null
      ))}
      <div className="message">
        {message}
      </div>
      <div className="btn-container">
        <button className="btn" onClick={handleResetClick}>
          Reset Game
        </button>
        <button className="btn"
          type="button"
          disabled={
            autoPlay ||
            tictactoeState.tictactoe.winner !== 0 ||
            tictactoeState.tictactoe.nextPlayer === 1
          }
          onClick={handleAutoPlayClick}
        >
          Play with MegaBrain
        </button>
      </div>
      <div className="github-container">
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
