import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from "utils/localStorage";
import { /*ITictactoe,*/ ITictactoeState, initialTictactoeState, TCell } from 'models/ITictactoe';
import { CTictactoe } from 'pages/tictactoe/TictactoeGame';
import { RootState, AppThunk } from '../store';

const initialState: ITictactoeState = initialTictactoeState;

const tictactoeSlice = createSlice({
  name: 'tictactoe',
  initialState,
  reducers: {
    loadTictactoeStateStarted: (state, { payload: TictactoeState }: PayloadAction<ITictactoeState>) => {
      return state;
    },
    loadTictactoeStateSuccess: (state, { payload: TictactoeState }: PayloadAction<ITictactoeState>) => {
      return state;
    },
    loadTictactoeStateFailure: (state, { payload: err }: PayloadAction<string>) => {
      return state;
    },
    resetTictactoe: (state) => {
      return { ...state, ...initialState };
    },
    makeMove: (state, action: PayloadAction<TCell>) => {
      return {
        ...state,
        tictactoe: {
          ...state.tictactoe,
          ...CTictactoe.makeMove(action.payload)
        }
      }
    },
  },
});

export const {
  resetTictactoe,
  makeMove,
} = tictactoeSlice.actions;

export const loadTictactoeState = ():AppThunk =>  {
	return (dispatch) => {
		dispatch(tictactoeSlice.actions.loadTictactoeStateStarted(initialState));
		new Promise((resolve, reject) => {
			try {
				resolve(storage.loadTictactoeState());
			} catch (err) {
				reject(err);
			}
		})
		.then((TictactoeState) => {
			dispatch(tictactoeSlice.actions.loadTictactoeStateSuccess(TictactoeState as ITictactoeState))
		})
		.catch(err => {
      if (err instanceof TypeError) {
        // statements to handle TypeError exceptions
      } else if (err instanceof RangeError) {
        // statements to handle RangeError exceptions
      } else if (err instanceof EvalError) {
        // statements to handle EvalError exceptions
      } else if (typeof err === "string") {
        // The error is a string
        dispatch(tictactoeSlice.actions.loadTictactoeStateFailure(err));
      } else {
        // statements to handle any unspecified exceptions
        //logMyErrors(e); // pass exception object to error handler
      }
		});
  }
}

export const selectTictactoeState = (state: RootState) => state.tictactoe;

export default tictactoeSlice.reducer;
