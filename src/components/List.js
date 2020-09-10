import React from "react";

function List(props) {
  const { tasks } = props;

  return (
    <div id="list">
      {tasks.map((task) => {
        return (
          <div>
            <h3>{task}</h3>
          </div>
        );
      })}
    </div>
  );
}
export default List;
