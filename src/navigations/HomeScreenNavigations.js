import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import { headerStyles } from '../constants/navigatorStyles.constants';

const Stack = createStackNavigator();

export default function (props) {
	return (
		<Stack.Navigator screenOptions={headerStyles}>
			<Stack.Screen name={'HOME-TODOS'} component={Home} />
		</Stack.Navigator>
	);
}
