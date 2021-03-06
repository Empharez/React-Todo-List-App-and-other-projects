import React, { Component } from 'react';
import TodoItem from './TodoItem';

import todosData from '../todosData'


class TodoList extends Component{
  constructor(){
    super()
    this.state = {
      todos: todosData
    }
  }
  render(){
    const todoComponents = this.state.todos.map(todo => {
      return(
        <TodoItem key={todo.id} todo={todo}/>
      ) 
    })
    return(
      <div className='todo-list'>
          {todoComponents}
          
      </div>
    )
  }
    
}



export default TodoList;