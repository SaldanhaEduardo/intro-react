import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import List from "./components/List";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  async function addList() {
    const { data: task } = await api.post("/tasks", {
      title,
      message,
    });

    setTasks([...tasks, task]);
    setTitle("");
    setMessage("");
  }

  return (
    <>
      <List title="Tarefas" />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            {task.message}
          </li>
        ))}
      </ul>

      <div className="imputContainer">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button type="button" onClick={addList}>
        Adicionar
      </button>
    </>
  );
}

export default App;
