import TodoItem from "./TodoItem";
import "./components.css";

function TodoList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <ul className="list-ul">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          onDelete={() => onDeleteTask(index)}
          onToggle={() => onToggleTask(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
