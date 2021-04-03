import React, { useContext } from 'react';
import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { TodoStateContext } from '../contexts/Todos';
import SC from '../constants/screens.constants';

export default function New({ navigation }) {
	const todos = useContext(TodoStateContext);

	const pressHandler = screen => {
		navigation.navigate(screen);
	};

	return (
		<SafeAreaView style={styles.TodoListContainer}>
			<Text>{JSON.stringify(todos)}</Text>
			<Button title={SC.HISTORY} onPress={() => pressHandler(SC.HISTORY)} />
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
		backgroundColor: 'azure',
	},
});
