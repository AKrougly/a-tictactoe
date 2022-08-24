import { makeStyles } from 'tss-react/mui';

export const useTictactoeStyles = makeStyles()((theme) => {
  return {
    root: {
      height: '25em',
      margin: '2em auto',
      width: '25.5em',
    },
    message: {
      display: 'inline-block',
      background: 'white',
      border: '0.25em solid #dde',
      //-webkit-border-radius: '10px 10px 10px 10px',
      //-moz-border-radius: '10px 10px 10px 10px',
      borderRadius: '10px 10px 10px 10px',
      color: '#668',
      margin: '1em auto 2em auto',
      padding: '1em 0',
      width: '25em',
    },
    btn: {
      display: 'inline-block',
      //-moz-user-select: none,
      //-ms-touch-action: manipulation,
      //-ms-user-select: none,
      //-webkit-user-select: none,
      backgroundColor: '#337ab7',
      backgroundImage: 'none',
      borderColor: '#2e6da4',
      borderRadius: '4px',
      border: '1px solid transparent',
      color: '#fff',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: 1.42857143,
      marginBottom: 0,
      padding: '6px 12px',
      textAlign: 'center',
      touchAction: 'manipulation',
      userSelect: 'none',
      verticalAlign: 'middle',
      whiteSpace: 'nowrap',
    },
    //.btn:hover {
    //  color: #fff,
    //  background-color: #286090,
    //  border-color: #204d74,
    //}
    
    github: {
      marginTop: '2em',
    },
    
    //.github iframe {
    //  border: 0,
    //}
    
    //.github iframe:first-child {
    //  margin-right: 1em,
    //}
  }
});