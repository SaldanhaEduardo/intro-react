import React from "react";
import { useState } from "react";

export default function Itemlist(props) {
  const { onSave } = props;
  const [text, setText] = useState("");

  return (
    <div>
      <form id="item-list">
        <label>Lista de Tafeas</label>
        <input type="text" onChange={(e) => setText(e.currentTarget.value)} />

        <button type="button" onClick={() => onSave(text)}>
          Salvar
        </button>
      </form>
    </div>
  );
}