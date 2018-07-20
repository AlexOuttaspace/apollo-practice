import React, { Component } from 'react'
import { Mutation } from 'react-apollo'

import { ADD_TODO, GET_TODOS } from './queries'

class TodoInput extends Component {
  state = { todo: '' }
  render() {
    return (

      <Mutation mutation={ADD_TODO}
        update={(cache, { data: { addTodo } }) => {
          const { todos } = cache.readQuery({ query: GET_TODOS });
          cache.writeQuery({
            query: GET_TODOS, // WHY WE NEED THIS?
            data: { todos: [...todos, addTodo] }
          })
        }}
      >
        {(addTodo, { loading, error }) => (
          <div>

            <form onSubmit={e => {
              e.preventDefault();
              addTodo({ variables: { type: this.state.todo } })
              this.setState({ todo: '' })
            }}>
              <input
                type="text"
                value={this.state.todo}
                onChange={e => this.setState({ todo: e.target.value })}
                placeholder='Write new todo...'
              />
              <button type='submit'>Add todo</button>
              {loading && <p>loading</p>}
              {error && <p>error</p>}
            </form>
          </div>
        )}
      </Mutation>
    );
  }
}

export default TodoInput;