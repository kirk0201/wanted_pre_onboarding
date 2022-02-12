import React, { useState } from "react";
import "./Modal.scss";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const onClick = () => {
    setModal(!modal);
  };
  return (
    <div className="modalContainer">
      <div className="title">Modal</div>
      <div className="contentContainer">
        <button className="modalButton" onClick={onClick}>
          Open Modal
        </button>
        {modal ? <ModalWindow onClick={onClick} /> : ""}
      </div>
    </div>
  );
}
export function ModalWindow({ onClick }) {
  return (
    <div className="windowContainer">
      <div className="windowWrapper">
        <div className="exit">
          <img
            src={require("../src_assets/close.png")}
            width={20}
            height={20}
            alt="close"
            onClick={onClick}
          />
          <div className="content">HELLO CODESTATES!</div>
        </div>
      </div>
    </div>
  );
}
