import React, { useState } from "react";
import "./Autocomplete.scss";

const datas = [
  { name: "antique", id: 1 },
  { name: "vintage", id: 2 },
  { name: "refurbished", id: 3 },
];
export default function Autocomplete() {
  const [keyword, setKeyword] = useState();
  const [suggest, setSuggest] = useState({suggestions:[],text:""})

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length >0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.item.sort().filter(v => regex.test(v))
    }
    setSuggest(() => ({suggestions, text:value}))
  }

  return (
    <div className="autoContainer">
      <div className="inputContainer">
        <input
          type="text"
          value={keyword || ""}
          onChange={(e) => update("keyword", e.target.value)}
        />
        <div>{results}</div>
      </div>
    </div>
  );
}

function renderSuggestions () {
  const 
}