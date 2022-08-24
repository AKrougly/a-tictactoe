import { makeStyles } from 'tss-react/mui';

export const useCellStyles = makeStyles()((theme) => {
  return {
    root: {
      background: 'white',
      webkitBoxShadow: '10px 10px 5px 0px rgba(200, 200, 215, 0.55)',
      mozBoxShadow: '10px 10px 5px 0px rgba(200, 200, 215, 0.55)',
      boxShadow: '10px 10px 5px 0px rgba(200, 200, 215, 0.55)',
      cursor: 'default',
      height: '8em',
      margin: '0 0.5em 0.5em 0',
      width: '8em',
    },
    open: {
      "&:hover": {
        background: '#eefcfc',
        cursor: 'pointer',
      }
    },
    symbol: {
      fontSize: '5em',
      fontFamily: 'sans-serif',
      lineHeight: 0,
      paddingTop: '50%',
    },
  }
});