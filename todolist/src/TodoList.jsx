import React from "react";

export const TodoList = (props) => {
  return (
    <div className="listitems">
      <span
        class="material-icons-outlined"
        onClick={() => {
          props.onSelect(props.id);
        }}
      >
        highlight_off
      </span>
      <li>{props.text}</li>
    </div>
  );
};
