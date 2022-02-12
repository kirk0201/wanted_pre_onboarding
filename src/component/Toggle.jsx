import React, { useState } from "react";
import "./Toggle.scss";
function Toggle() {
  const [toggle, setoggle] = useState(false);

  const onClick = () => {
    setoggle(!toggle);
  };
  return (
    <div className="toggleContainer">
      <div
        className={`toggle ${toggle ? "toggle-checked" : ""}`}
        onClick={onClick}
      >
        <div
          className={`toggleCircle ${toggle ? "toggleCircle-checked" : ""}`}
        ></div>
      </div>

      <div>{toggle ? "Toggle Switch ON" : "Toggle Switch OFF"}</div>
    </div>
  );
}
export default Toggle;
