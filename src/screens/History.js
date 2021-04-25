import React, { useContext } from 'react';
import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { TodoStateContext } from '../contexts/Todos';
import SC from '../constants/screens.constants';
import { THEME } from '../constants/theme.constants';

export default function History({ navigation }) {
	const todos = useContext(TodoStateContext);

	const pressHandler = screen => {
		navigation.navigate(screen);
	};

	return (
		<SafeAreaView style={styles.TodoListContainer}>
			<Button title={SC.NEW} onPress={() => pressHandler(SC.NEW)} />
			<Button title={SC.HOME} onPress={() => pressHandler(SC.HOME)} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	TodoListContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: THEME.DARK,
	},
});
