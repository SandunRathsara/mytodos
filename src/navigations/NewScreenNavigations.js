import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import New from '../screens/New';
import { headerStyles } from '../constants/navigatorStyles.constants';
import SC from '../constants/screens.constants';
import Header from '../components/AppBar';

const Stack = createStackNavigator();

export default function (props) {
	return (
		<Stack.Navigator screenOptions={{ header: Header }}>
			<Stack.Screen name={SC.NEW} component={New} />
		</Stack.Navigator>
	);
}
