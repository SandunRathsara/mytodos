import React, { useContext } from 'react';
import { Text, FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { TodoStateContext, TodosDispatchContext, useTodoReducerMethods } from '../contexts/Todos';
import { Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
import { THEME } from '../constants/theme.constants';
import { format } from 'date-fns';

export default function Home() {
	const state = useContext(TodoStateContext);
	const dispatch = useContext(TodosDispatchContext);
	const { changeDoneStatus } = useTodoReducerMethods(dispatch);

	const TodoCard = ({ item }) => {
		return (
			<Card style={styles.card}>
				<Card.Content style={styles.cardContent}>
					<View style={styles.todoLeft}>
						<Title style={styles.textColor}>{item.title}</Title>
						<Paragraph style={styles.textColor}>{item.description}</Paragraph>
					</View>
					<View style={styles.todoRight}>
						<Text style={styles.textColor}>{item.dueDate ? format(item.dueDate, 'do MMMM Y') : ''}</Text>
					</View>
				</Card.Content>
				<Card.Actions style={styles.cardActions}>
					<Button>
						<Text style={{ color: THEME.LIGHT }}>Add Subtask</Text>
					</Button>
					<Checkbox status={item.done ? 'checked' : 'unchecked'} onPress={() => changeDoneStatus(item.id)} />
				</Card.Actions>
			</Card>
		);
	};

	return (
		<SafeAreaView style={styles.TodoListContainer}>
			<FlatList data={state.todos} renderItem={TodoCard} keyExtractor={item => item.id} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	textColor: {
		color: 'azure',
	},
	TodoListContainer: {
		backgroundColor: THEME.DARK,
		flex: 1,
	},
	scrollView: {
		maxHeight: 200,
	},
	card: {
		margin: 10,
		borderRadius: 10,
		backgroundColor: THEME.LESS_DARK,
		color: THEME.LIGHT,
	},
	cardContent: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	cardActions: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	todoLeft: {
		alignSelf: 'center',
	},
	todoRight: {
		alignSelf: 'center',
	},
});
