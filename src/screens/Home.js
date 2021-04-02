import React, {useContext} from 'react';
import {Text, Button, StyleSheet} from 'react-native';
import {TodoStateContext} from '../contexts/Todos';
import {Container} from 'native-base';

export default function Home({navigation}) {
  const todos = useContext(TodoStateContext);

  const pressHandler = () => {
    navigation.navigate('History');
  };

  return (
    <Container style={styles.TodoListContainer}>
      <Text>{JSON.stringify(todos)}</Text>
      <Button title={'History'} onPress={pressHandler} />
    </Container>
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
