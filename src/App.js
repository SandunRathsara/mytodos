/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {TodoContextProvider} from './contexts/Todos';
import Navigation from './routes/HomeStack';

const App: () => Node = () => {
  return (
    <TodoContextProvider>
      <Navigation />
    </TodoContextProvider>
  );
};

export default App;
