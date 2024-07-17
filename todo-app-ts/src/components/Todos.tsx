import { ListOfTodos } from "./types"

interface Props {
    todos: ListOfTodos
}



export const Todos: React.FC =({ todos }) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
                    <Todos 
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                    />

                </li>
            ))}
        </ul>
    )
}