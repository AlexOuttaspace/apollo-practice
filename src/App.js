import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import TodoList from './TodoList';
import TodoInput from './TodoInput';


const client = new ApolloClient({
  uri: 'https://8v9r9kpn7q.lp.gql.zone/graphql'
});


class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <TodoInput />
        <TodoList />
      </ApolloProvider>
    )
  }
}

export default App;


// const ADD_TODO = gql`
// mutation addTodo($type: String!) {
//   addTodo(type: $type) {
//     id
//     type
//   }
// }
// `;

// const GET_TODOS = gql`
//   {
//     todos {
//       id
//       type
//     }
//   }
// `;

// const UPDATE_TODO = gql`
//   mutation updateTodo($id: String!, $type: String!) {
//     updateTodo(id: $id, type: $type) {
//       id
//       type
//     }
//   }
// `;

