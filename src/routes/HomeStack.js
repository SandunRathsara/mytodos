import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import History from '../screens/History';

const screens = {
  Home: {screen: Home},
  History: {screen: History},
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
