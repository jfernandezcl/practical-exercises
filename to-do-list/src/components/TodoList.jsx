import TodoItem from "./TodoItem";

function TodoList({ tasks, onDeleteTask, onToggleTask }) {
  return (
    <ul>
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
