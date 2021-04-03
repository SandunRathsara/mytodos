import React, { useContext } from 'react';
import { Text, SafeAreaView, Button, StyleSheet } from 'react-native';
import { TodoStateContext } from '../contexts/Todos';
import SC from '../constants/screens.constants';

export default function Home({ navigation }) {
	const todos = useContext(TodoStateContext);

	const pressHandler = screen => {
		navigation.navigate(screen);
	};
	return (
		<SafeAreaView style={styles.TodoListContainer}>
			{todos.todos.map((item, i) => (
				<Text key={i}>{JSON.stringify(item.title)}</Text>
			))}
			<Button title={SC.HISTORY} onPress={() => pressHandler(SC.HISTORY)} />
			<Button title={SC.NEW} onPress={() => pressHandler(SC.NEW)} />
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
