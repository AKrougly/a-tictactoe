import React, { useEffect } from 'react';

import TictactoeGame from 'pages/tictactoe/Tictactoe';

const App: React.FC = (): React.ReactElement => {

  useEffect(() => {
    //dispatch(loadTictactoeState());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <TictactoeGame />
    </div>
  );
}

export default App;
