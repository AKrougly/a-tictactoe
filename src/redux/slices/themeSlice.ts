import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from "utils/localStorage";
import { IThemeState } from 'models/ITheme';
import { RootState, AppThunk } from '../store';

const initialState: IThemeState = {
  theme: {
    primary: "pink",
    secondary: "pink",
    darkMode: false,
  }
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    loadThemeStateStarted: (state, { payload: themeState }: PayloadAction<IThemeState>) => {
      state.theme = themeState.theme;
    },
    loadThemeStateSuccess: (state, { payload: themeState }: PayloadAction<IThemeState>) => {
      state.theme = themeState.theme;
    },
    loadThemeStateFailure: (state, { payload: err }: PayloadAction<string>) => {
      ;
    },
    toggleDarkMode: (state) => {
      state.theme.darkMode = !state.theme.darkMode;
    },
  },
});

export const loadThemeState = ():AppThunk =>  {
	return (dispatch) => {
		dispatch(themeSlice.actions.loadThemeStateStarted(initialState));
		new Promise((resolve, reject) => {
			try {
				//localStorage.clear();
				resolve(storage.loadThemeState());
			} catch (err) {
				reject(err);
			}
		})
		.then((themeState) => {
			dispatch(themeSlice.actions.loadThemeStateSuccess(themeState as IThemeState))
		})
		.catch(err => {
			;//dispatch(themeSlice.actions.loadThemeStateFailure(err));
		});
  }
}

export const { toggleDarkMode } = themeSlice.actions;

export const selectThemeState = (state: RootState) => state.theme;

export default themeSlice.reducer;
