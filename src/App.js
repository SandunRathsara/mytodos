import React from 'react';
import {TodoContextProvider} from './contexts/Todos';

import Navigator from './navigations';

function App() {
  return (
    <TodoContextProvider>
      <Navigator />
    </TodoContextProvider>
  );
}

export default App;
