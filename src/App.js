import React, { useState, useEffect } from "react";
import Itemlist from "./components/Itemlist";
import List from "./components/List";
import Deleteitem from "./components/Deleteitem";

import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);
  const [items, setItems] = useState([]);

  const addTask = (task) => {
    setTask([...tasks, task]);
  };

  return (
    <div className="App">
      <>
        <Itemlist onSave={addTask} />
        <List tasks={tasks} />
      </>
    </div>
  );
}

export default App;
