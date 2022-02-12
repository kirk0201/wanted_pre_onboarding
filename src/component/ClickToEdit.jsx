import React, { useState } from "react";
import "./ClickToEdit.scss";

export default function ClickToEdit() {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);

  const nameChange = (e) => {
    console.log(e);
    if (e.key === "Enter") {
      setName(e.target.value);
    }
  };

  const ageChange = (e) => {
    if (e.key === "Enter") {
      setAge(e.target.value);
    }
  };

  return (
    <div className="editContainer">
      <div className="title">ClickToEdit</div>
      <div className="inputContainer">
        <div className="inputNameContainer">
          <div className="inputName">
            이름
            <input type="text" onKeyPress={nameChange} />
          </div>
        </div>
        <div className="inputAgeContainer">
          <div>
            나이
            <input type="number" onKeyPress={ageChange} />
          </div>
        </div>
        <div className="textContent">
          이름 {name} 나이 {age}
        </div>
      </div>
    </div>
  );
}
