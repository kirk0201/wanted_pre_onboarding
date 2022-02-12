import React, { useState, useRef } from "react";
import "./App.scss";
import Autocomplete from "./component/Autocomplete";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import Toggle from "./component/Toggle";

function App() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const ref = useRef();

  const onMouseDown = (e) => {
    setCursorX((prev) => {
      if (prev === e.pageX) {
        ref.current.style = `left:${cursorX};`;
      } else {
        return e.pageX;
      }
    });
    setCursorY((prev) => {
      if (prev === e.pageY) {
        ref.current.style = `top:${cursorY};`;
      } else {
        return e.pageY;
      }
    });
    console.log(e, cursorX, cursorY);
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
    </div>
  );
}

export default App;
