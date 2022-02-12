import React, { useState, useRef } from "react";
import "./Autocomplete.scss";

export default function Autocomplete() {
  const [keywords, setKeywords] = useState([
    { id: 1, name: "antique" },
    { id: 2, name: "vintage" },
    { id: 3, name: "refurbished" },
    { id: 4, name: "중고A급" },
  ]);
  const [filters, setFilters] = useState(keywords);

  const filterList = (e) => {
    const value = e.target.value.toLowerCase();
    const filter = keywords.filter((keyword) =>
      keyword.name.toLowerCase().includes(value)
    );
    setFilters(filter);
    console.log(value);
  };
  const onEnter = (e) => {
    if (e.key === "Enter") {
      setKeywords([
        ...keywords,
        { id: keywords.length + 1, name: e.target.value },
      ]);
    }
  };
  const removeKeyword = (id) =>
    setKeywords(keywords.filter((keyword) => keyword.id !== id));

  const inputRef = useRef();

  const onClick = (e) => {
    inputRef.current.value = e.target.textContent;
  };

  return (
    <div className="autoContainer">
      <div className="title">AutoComplete</div>
      <div className="contentContainer">
        <div className="inputContainer">
          <input
            ref={inputRef}
            type="text"
            onChange={filterList}
            onKeyPress={onEnter}
          ></input>
          {inputRef.current === undefined
            ? null
            : inputRef.current?.value === ""
            ? null
            : filters.map((keyword, index) => (
                <div
                  className="filterContainer"
                  key={keyword.id}
                  onClick={onClick}
                >
                  <div className="filterContent">
                    <div className="filterText">{keyword.name}</div>
                    <img
                      onClick={() => removeKeyword(keyword.id)}
                      src={require("../src_assets/close.png")}
                    />
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
