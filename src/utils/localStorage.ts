import { IThemeState } from "models/ITheme";
import { ITictactoeState, initialTictactoeState } from "models/ITictactoe";

const storageThemeKey = 'anAppTheme';
const storageTictactoeKey = 'anAppTictactoe';

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const saveThemeState = (appTheme: IThemeState) => {
  localStorage.setItem(storageThemeKey, JSON.stringify(appTheme));
};

const loadThemeState = (): IThemeState => {
  const appTheme = localStorage.getItem(storageThemeKey);
  if (appTheme) {
    return JSON.parse(appTheme);
  }

  saveThemeState({
    theme: {
      primary: "blue",
      secondary: "pink",
      darkMode: true,
    }
  });

  return {
    theme: {
      primary: "blue",
      secondary: "pink",
      darkMode: true,
    }
  };
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const saveTictactoeState: (tictactoeState: ITictactoeState) => void = (tictactoeState: ITictactoeState) => {
  localStorage.setItem(storageTictactoeKey, JSON.stringify(tictactoeState));
};

const loadTictactoeState: () => ITictactoeState = (): ITictactoeState => {
  const tictactoeState = localStorage.getItem(storageTictactoeKey);
  if (tictactoeState) {
    return JSON.parse(tictactoeState);
  }

  return initialTictactoeState;
};

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const storage = {
  saveThemeState, loadThemeState,
  saveTictactoeState, loadTictactoeState
};

export default storage;
