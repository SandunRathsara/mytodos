import React, { useContext } from 'react';
import { Text, SafeAreaView /*StyleSheet*/ } from 'react-native';

import { TodoStateContext } from '../contexts/Todos';

export default function TodoList(props) {
	const todos = useContext(TodoStateContext);
	console.log('todos', todos);
	return (
		<SafeAreaView>
			<Text>{props.name}</Text>
		</SafeAreaView>
	);
}

// const styles = StyleSheet.create({
//   TodoListContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'azure',
//   },
// });
