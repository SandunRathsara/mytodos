import { THEME } from './theme.constants';

export const headerStyles = {
	title: 'MyTodos',
	headerStyle: { backgroundColor: THEME.LESS_DARK },
	headerTintColor: THEME.LIGHT,
	headerTitleStyle: {
		fontWeight: 'bold',
		alignSelf: 'center',
	},
};

export const tabStyles = {
	activeTintColor: THEME.LIGHT,
	inactiveBackgroundColor: THEME.LESS_DARK,
	activeBackgroundColor: THEME.DARK,
	inactiveTintColor: THEME.LIGHT,
};

export const ICONS = {
	HOME: 'home',
	NEW: 'pluscircleo',
	HISTORY: 'check',
};
