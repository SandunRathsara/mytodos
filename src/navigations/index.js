import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import History from '../screens/History';
import New from '../screens/New';
import SC from '../constants/screens.constants';
import {DARK} from '../constants/theme.constants';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={SC.HOME}>
        <Tab.Screen
          name={SC.HOME}
          component={Home}
          options={{
            title: SC.HOME,
            tabBarIcon: () => (
              <Icon name="home" size={30} style={{color: DARK.LESS_DARK}} />
            ),
          }}
        />
        <Tab.Screen
          name={SC.NEW}
          component={New}
          options={{
            title: SC.NEW,
            tabBarIcon: () => (
              <Icon
                name="plus-circle"
                size={30}
                style={{color: DARK.LESS_DARK}}
              />
            ),
          }}
        />
        <Tab.Screen
          name={SC.HISTORY}
          component={History}
          options={{
            title: SC.HISTORY,
            tabBarIcon: () => (
              <Icon name="history" size={30} style={{color: DARK.LESS_DARK}} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
