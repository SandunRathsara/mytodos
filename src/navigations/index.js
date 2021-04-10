import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreenNavigations from './HomeScreenNavigations';
import HistoryScreenNavigations from './HistoryScreenNavigations';
import NewScreenNavigations from './NewScreenNavigations';
import SC from '../constants/screens.constants';
import { THEME } from '../constants/theme.constants';
import { tabStyles, ICONS } from '../constants/navigatorStyles.constants';

const Tab = createMaterialBottomTabNavigator();

function Navigator() {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName={SC.HOME_NAV} shifting={true} barStyle={tabStyles}>
				<Tab.Screen
					name={SC.NEW_NAV}
					component={NewScreenNavigations}
					options={{
						title: SC.NEW,
						tabBarIcon: () => <Icon name={ICONS.NEW} size={23} style={{ color: THEME.LIGHT }} />,
						tabBarColor: THEME.DARK,
					}}
				/>
				<Tab.Screen
					name={SC.HOME_NAV}
					component={HomeScreenNavigations}
					options={{
						title: SC.HOME,
						tabBarIcon: () => <Icon name={ICONS.HOME} size={23} style={{ color: THEME.LIGHT }} />,
						tabBarColor: THEME.DARK,
					}}
				/>
				<Tab.Screen
					name={SC.HISTORY_NAV}
					component={HistoryScreenNavigations}
					options={{
						title: SC.HISTORY,
						tabBarIcon: () => <Icon name={ICONS.HISTORY} size={23} style={{ color: THEME.LIGHT }} />,
						tabBarColor: THEME.DARK,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
