import React from 'react';
import { Todo as TodoType, TodoId } from './types'; 

interface Props extends TodoType {
    onRemoveTodo: ({ id }: TodoId) => void
}

export const Todo: React.FC<Props> = ({id, title, completed, onRemoveTodo}) => {
    return(
        <div>
            <input 
                checked={completed}
                type="checkbox"
                onChange={() => {}}
            />
            <label>{title}</label>
            <button
            className='button-delete' 
            onClick={() => {
                onRemoveTodo({ id })
            }}>Delete</button>
        </div>
    )
}