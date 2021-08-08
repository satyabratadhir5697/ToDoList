import "./App.css";
import React, { useState } from "react";
import { TodoList } from "./TodoList";

function App() {
  const [inputList, setInputList] = useState("");
  const [itemList, SetItemList] = useState([]);

  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const Itemclicked = () => {
    SetItemList((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    SetItemList((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="main_div">
      <div className="center_div">
        <h1>ToDo List</h1>
        <div className="searchtypeandsearch">
          <input
            type="text"
            placeholder="Write anything"
            onChange={itemEvent}
            value={inputList}
          />
          <span class="material-icons-outlined" onClick={Itemclicked}>
            add_circle
          </span>
        </div>
        <ol>
          {itemList.map((itemval, index) => {
            return (
              <TodoList
                text={itemval}
                key={index}
                id={index}
                onSelect={deleteItems}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
