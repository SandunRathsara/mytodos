import { DARK } from './theme.constants';

export const headerStyles = {
	title: 'MyTodos',
	headerStyle: { backgroundColor: DARK.DARK },
	headerTintColor: DARK.LIGHT,
	headerTitleStyle: {
		fontWeight: 'bold',
		alignSelf: 'center',
	},
};

export const tabStyles = {
	activeTintColor: DARK.LIGHT,
	inactiveBackgroundColor: DARK.LESS_DARK,
	activeBackgroundColor: DARK.DARK,
	inactiveTintColor: DARK.LIGHT,
};

export const ICONS = {
	HOME: 'home',
	NEW: 'pluscircleo',
	HISTORY: 'check',
};
