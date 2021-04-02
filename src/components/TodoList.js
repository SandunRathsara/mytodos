import React, {useContext} from 'react';
import {Text /*StyleSheet*/} from 'react-native';
import {Container} from 'native-base';

import {TodoStateContext} from '../contexts/Todos';

export default function TodoList(props) {
  const todos = useContext(TodoStateContext);
  console.log('todos', todos);
  return (
    <Container>
      <Text>{props.name}</Text>
    </Container>
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
