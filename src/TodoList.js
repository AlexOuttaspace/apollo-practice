import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { GET_TODOS, UPDATE_TODO } from './queries';


const TodoList = () => {
  return (
    <ul>
      <Query query={GET_TODOS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error occured</p>
          return data.todos.map(({ id, type }) => {
            let input;

            return (
              <Mutation mutation={UPDATE_TODO} key={id}>
                {updateTodo => (
                  <div>
                    <p>{type}</p>
                    <form
                      onSubmit={e => {
                        e.preventDefault();
                        updateTodo({ variables: { id, type: input.value } });

                        input.value = "";
                      }}
                    >
                      <input
                        ref={node => {
                          input = node;
                        }}
                      />
                      <button type="submit">Update Todo</button>
                    </form>
                  </div>
                )}
              </Mutation>
            )
          })
        }}
      </Query>
    </ul>
  );
}

export default TodoList;