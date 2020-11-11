import React, { useContext, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class TodoList extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme, darkTheme, lightTheme } = this.context
    const theme = isDarkTheme ? darkTheme : lightTheme;
    
    return (
      <div style={{
        background: theme.background,
        color: theme.text,
      }}>


        <form>
          <label htmlFor='todo' >Add todo:</label>
          <input type='text' id='todo'/>
          <input className='ui button primary' type='submit' value='Add new todo' style={{ marginRight: '4px' }} />
          <button className='ui button primary'>change the theme</button>
        </form>
      </div>
    )
  };
}

export default TodoList;