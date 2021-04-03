import React, { useContext } from 'react';
import { Text, View, SafeAreaView, Button, StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';
import { TodoStateContext } from '../contexts/Todos';
import SC from '../constants/screens.constants';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Home({ navigation }) {
	const todos = useContext(TodoStateContext);

	const pressHandler = screen => {
		navigation.navigate(screen);
	};

	return (
		<SafeAreaView style={styles.TodoListContainer}>
			<Text>{JSON.stringify(todos)}</Text>
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
