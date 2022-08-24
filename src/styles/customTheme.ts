import { createTheme } from '@mui/material/styles';

const customTheme = (darkMode: boolean) =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#009688',
        light: '#00968840',
      },
      secondary: {
        main: darkMode ? '#e4fffd' : '#005b53',
      },
    },
    /*overrides: {
      MuiTypography: {
        root: {
          wordBreak: 'break-word',
        },
      },
    },*/
  });

export default customTheme;