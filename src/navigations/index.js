import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreenNavigations from './HomeScreenNavigations';
import HistoryScreenNavigations from './HistoryScreenNavigations';
import NewScreenNavigations from './NewScreenNavigations';
import SC from '../constants/screens.constants';
import { DARK } from '../constants/theme.constants';
import { tabStyles, ICONS } from '../constants/navigatorStyles.constants';

const Tab = createBottomTabNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName={SC.HOME} tabBarOptions={tabStyles}>
				<Tab.Screen
					name={SC.HOME}
					component={HomeScreenNavigations}
					options={{
						title: SC.HOME,
						tabBarIcon: () => <Icon name={ICONS.HOME} size={30} style={{ color: DARK.LIGHT }} />,
					}}
				/>
				<Tab.Screen
					name={SC.NEW}
					component={NewScreenNavigations}
					options={{
						title: SC.NEW,
						tabBarIcon: () => <Icon name={ICONS.NEW} size={30} style={{ color: DARK.LIGHT }} />,
					}}
				/>
				<Tab.Screen
					name={SC.HISTORY}
					component={HistoryScreenNavigations}
					options={{
						title: SC.HISTORY,
						tabBarIcon: () => <Icon name={ICONS.HISTORY} size={30} style={{ color: DARK.LIGHT }} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
