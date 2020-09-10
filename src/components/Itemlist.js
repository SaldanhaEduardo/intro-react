import React from "react";
import { useState } from "react";

function Itemlist(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <form id="item-list">
        <label>Lista de Tarefas</label>
        <input type="text" onChange={(e) => setText(e.currentTarget.value)} />

        <button type="button" onClick={() => onSave(text)}>
          Salvar
        </button>
      </form>
    </div>
  );
}

export default Itemlist;
