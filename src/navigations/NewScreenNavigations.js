import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import New from '../screens/New';
import { headerStyles } from '../constants/navigatorStyles.constants';

const Stack = createStackNavigator();

export default function (props) {
	return (
		<Stack.Navigator screenOptions={headerStyles}>
			<Stack.Screen name={'NEW-TODOS'} component={New} />
		</Stack.Navigator>
	);
}
