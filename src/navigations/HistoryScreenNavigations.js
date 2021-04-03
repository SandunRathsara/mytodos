import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import History from '../screens/History';
import { headerStyles } from '../constants/navigatorStyles.constants';

const Stack = createStackNavigator();

export default function (props) {
	return (
		<Stack.Navigator screenOptions={headerStyles}>
			<Stack.Screen name={'HISTORY-DONE'} component={History} />
		</Stack.Navigator>
	);
}
