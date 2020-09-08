import React, {useState} from 'react';

export const TodoForm = ({dispatch}) => {
    const [tasks, setTasks] = useState('');
  
    const handleChanges = e => {
      setTasks(e.target.value);
    };
  
    const submitForm = e => {
      e.preventDefault();
      dispatch({
        type: 'AddTodo',
      });
    };
  
    const clearCompleted = e => {
      e.preventDefault();
      dispatch({
        type: 'ClearCompleted'
      });
    };
  
    return (
        <div>
        <form onSubmit={submitForm}>
          <label>Todo
            <input name='todo' onChange={handleChanges} value={tasks} id={Date.now()} />
          </label>
          <button>Add Task</button>
          <button onClick={clearCompleted}>Clear Completed</button>
        </form>
      </div>
    );
} 