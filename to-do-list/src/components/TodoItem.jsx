function TodoItem({ task, onDelete, onToggle }) {
  return (
    <li className="list-li">
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
        onClick={onToggle}
      >
        {task.text}
      </span>
      <button className="list-button-li" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
