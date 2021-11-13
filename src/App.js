import React from 'react';

import WinXP from 'WinXP';
import { useGA } from 'hooks';

const App = () => {
  useGA('G-310N6Y3561', 'winXP');
  return <WinXP />;
};

export default App;
