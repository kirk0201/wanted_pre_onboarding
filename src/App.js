import React, { useState, useRef } from "react";
import "./App.scss";
import Autocomplete from "./component/Autocomplete";
import ClickToEdit from "./component/ClickToEdit";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const ref = useRef();

  const onMouseDown = (e) => {
    console.log(e.clientX, e.clientY);

    setCursorX((prev) => {
      if (prev === e.clientX) {
        ref.current.style = `left:${cursorX};`;
      } else return e.clientX;
    });
    setCursorY((prev) => {
      if (prev === e.clientY) {
        ref.current.style = `top:${cursorY};`;
      } else return e.clientY;
    });

    ref.current.style = `left:${cursorX};`;
    ref.current.style = `top:${cursorY};`;

    ref.current.style = `display:block;`;
  };
  const onMouseUp = () => (ref.current.style = `display: none;`);
  return (
    <div className="App" onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <div
        ref={ref}
        className="mouse"
        style={{
          display: "none",
          left: cursorX - 35 + "px",
          top: cursorY - 35 + "px",
        }}
      ></div>
      <Toggle />
      <Modal />
      <Tab />
      <Tag />
      <Autocomplete />
      <ClickToEdit />
    </div>
  );
}

export default App;
