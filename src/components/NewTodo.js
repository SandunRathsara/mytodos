import React, { useContext, useState } from 'react';
import { Text, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { TodosDispatchContext, TodoStateContext, TodoReducerMethods } from '../contexts/Todos';
import DateTimePicker from '@react-native-community/datetimepicker';
import { THEME } from '../constants/theme.constants';
import SC from '../constants/screens.constants';

export default function (props) {
	const [showDatePicker, setShowDatePicker] = useState(false);

	const todos = useContext(TodoStateContext);
	const { newTodo } = todos;
	const { onChange, addTodo } = TodoReducerMethods(useContext(TodosDispatchContext));

	const onPress = e => {
		e.preventDefault();
		addTodo({ title: newTodo.title, description: newTodo.description, dueDate: newTodo.dueDate });
		props.navigation.navigate(SC.HOME);
	};
	const onDateChange = value => {
		setShowDatePicker(false);
		onChange('dueDate', value);
	};

	return (
		<SafeAreaView style={styles.NewTodoContainer}>
			<Input placeholder="Title" value={newTodo.title} onChangeText={value => onChange('title', value)} />
			<Input placeholder="description" value={newTodo.description} onChangeText={value => onChange('description', value)} />
			<Pressable onPressIn={() => setShowDatePicker(true)}>
				<Text style={styles.DueDate}>{newTodo.dueDate === null ? 'Due Date' : new Date(newTodo.dueDate).toDateString()}</Text>
			</Pressable>
			{showDatePicker && (
				<DateTimePicker
					value={newTodo.dueDate === null ? new Date() : newTodo.dueDate}
					mode={'date'}
					is24Hour={true}
					display="default"
					onChange={(e, value) => onDateChange(value)}
				/>
			)}
			<Button title="Submit" onPress={onPress} buttonStyle={styles.Submit} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	NewTodoContainer: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'azure',
	},
	DueDate: {
		margin: 10,
		alignSelf: 'stretch',
		color: 'grey',
		fontSize: 16,
		paddingLeft: 3,
		paddingBottom: 10,
		borderBottomColor: 'gray',
		borderBottomWidth: 1.5,
	},
	Submit: {
		margin: 10,
		marginTop: 100,
		backgroundColor: THEME.LESS_DARK,
		color: THEME.LESS_LIGHT,
	},
});
