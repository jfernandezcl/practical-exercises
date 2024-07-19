import React, { useState } from 'react';
import { Todos } from './components/Todos'
import './App.css'
import { TodoId, ListOfTodos, type Todo as Todo } from './components/types';


const mockTodos: ListOfTodos = [
  {
    id: '1',
    title: 'Ver el Twitch de midu' ,
    completed: true,
  },
  {
    id: '2',
    title: 'Aprender React con TypeScript' ,
    completed: false,
  },
  {
    id: '3',
    title: 'Sacar ticket de la miduFest' ,
    completed: false,
  }
]


const App = (): JSX.Element => {
  const [todos, setTodos] = useState<ListOfTodos>(mockTodos);

  const handleRemove = ({ id }: TodoId): void => {
  const newTodos = todos.filter(todo => todo.id !== id)
  setTodos(newTodos)
  }

  const handleCompleted = (
    { id, completed } : Pick<TodoType, 'id' | 'completed'>): void => {}

  return (
      <div className='todoapp'>
        <Todos 
        onRemoveTodo={handleRemove}
        todos={todos} />
      </div>
  )
}

export default App
