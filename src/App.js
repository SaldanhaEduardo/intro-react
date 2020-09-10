import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [owner, setOwner] = useState("");

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    const { data: project } = await api.post("/projects", { title, owner });

    setProjects([...projects, project]);
    setTitle("");
    setOwner("");
  }

  async function handleDelete(projectId) {
    await api.delete(`/projects/${projectId}`);

    setProjects(projects.filter((project) => project.id !== projectId));
  }

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} - {project.owner}
            <button onClick={() => handleDelete(project.id)}>Deletar</button>
          </li>
        ))}
      </ul>

      <div className="inputContainer">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />
      </div>

      <button type="button" onClick={handleAddProject}>
        Adicionar
      </button>
    </>
  );
}

export default App;
