import React, {useReducer} from 'react';
import {reducer, todos} from '../reducers/reducer';
import {Todo} from './Todo';
import {TodoForm} from './TodoForm';

export const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, todos);

    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {state.map(todo => {
                return <Todo todo={todo} dispatch={dispatch} key={todo.id} />
            })}
        </div>
    )
} 