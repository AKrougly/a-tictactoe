import { combineReducers, configureStore, Action } from "@reduxjs/toolkit";
import { ThunkAction } from 'redux-thunk';
import themeReducer from "./slices/themeSlice";
import notificationReducer from "./slices/notificationSlice";
import tictactoeReducer from "./slices/tictactoeSlice";

const rootReducer = combineReducers({
	theme: themeReducer,
	notification: notificationReducer,
	tictactoe: tictactoeReducer,
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		//middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		//	serializableCheck: false
		//}),
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
