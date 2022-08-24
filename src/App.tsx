import React, { useEffect } from 'react';

import { ThemeProvider } from '@mui/material/styles';
import customTheme from "styles/customTheme";
import { appStyles  } from "styles/appStyles";

import ToastNotification from 'components/ToastNotification';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { selectThemeState  } from 'redux/slices/themeSlice';
import { loadThemeState } from 'redux/slices/themeSlice';

import TictactoeGame from 'pages/tictactoe/TictactoeGame';

const App: React.FC = (): React.ReactElement => {
  const { classes } = appStyles();

  const dispatch = useAppDispatch();
  const { theme } = useAppSelector(selectThemeState);

  useEffect(() => {
    dispatch(loadThemeState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //dispatch(loadTictactoeState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={customTheme(theme.darkMode)}>
      <div className={classes.root}>
        <ToastNotification />
        <TictactoeGame />
     </div>
    </ThemeProvider>
  );
}

export default App;
