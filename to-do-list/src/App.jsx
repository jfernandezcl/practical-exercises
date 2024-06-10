import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { text: inputValue, completed: false }]);
    }
  };

  const handleDeleteTask = () => {};

  const handleToggleTask = () => {};

  return (
    <div>
      <h1>To do List</h1>
    </div>
  );
}

export default App;
