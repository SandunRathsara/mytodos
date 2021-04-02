import React, {useContext} from 'react';
import {Text, SafeAreaView, Button, StyleSheet} from 'react-native';
import {TodoStateContext} from '../contexts/Todos';

export default function History({navigation}) {
  const todos = useContext(TodoStateContext);

  const pressHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.TodoListContainer}>
      <Text>{JSON.stringify(todos)}</Text>
      <Button title={'back'} onPress={pressHandler} />
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
