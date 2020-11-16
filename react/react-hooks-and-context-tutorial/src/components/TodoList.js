import React, { useState } from 'react';

const TodoList = () =>  {
  const [todos, setTodos] = useState([
    { text: 'Pay bills!', id: 1 },
    { text: 'Feed the pup!', id: 2 },
  ])

  const addTodo = (text) => {
    setTodos([
      ...todos,
      {text, id: Math.random()}
    ])
  }
    
  return (
    <div>
      <form>
        <label htmlFor='todo' >Add todo:</label>
        <input type='text' id='todo'/>
        <input className='ui button primary' type='submit' value='Add new todo' style={{ marginRight: '4px' }} />
        <button className='ui button primary'>change the theme</button>
      </form>
    </div>
  )
}

export default TodoList;