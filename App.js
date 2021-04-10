import React from 'react';
import { TodoContextProvider } from './src/contexts/Todos';
import { Provider as RNPaperProvider } from 'react-native-paper';

import Navigator from './src/navigations';

function App() {
	return (
		<TodoContextProvider>
			<RNPaperProvider>
				<Navigator />
			</RNPaperProvider>
		</TodoContextProvider>
	);
}

export default App;
