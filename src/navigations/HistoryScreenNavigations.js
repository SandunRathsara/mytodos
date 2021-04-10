import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import History from '../screens/History';
import { headerStyles } from '../constants/navigatorStyles.constants';
import SC from '../constants/screens.constants';
import Header from '../components/AppBar';

const Stack = createStackNavigator();

export default function (props) {
	return (
		<Stack.Navigator screenOptions={{ header: Header }}>
			<Stack.Screen name={SC.HISTORY} component={History} />
		</Stack.Navigator>
	);
}
