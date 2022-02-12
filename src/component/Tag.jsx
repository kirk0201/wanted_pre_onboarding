import React, { useState } from "react";
import "./Tag.scss";

export default function Tag() {
  const [tags, setTags] = useState([
    { id: 0, text: "CodeState" },
    { id: 1, text: "JJang" },
  ]);

  const onEnter = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setTags([...tags, { id: Date.now(), text: e.target.value }]);
      e.target.value = "";
    }
  };
  const onDelete = (id) => {
    setTags(tags.filter((tag) => tag.id !== id));
  };
  return (
    <div className="tagContainer">
      <div className="title">Tag</div>
      <div className="contentContainer">
        <div className="tagWrapper">
          <ul className="tag">
            {tags.map((tag) => {
              return (
                <>
                  <div key={tag.id}>
                    {tag.text}
                    <span className="tagExit" onClick={() => onDelete(tag.id)}>
                      x
                    </span>
                  </div>
                </>
              );
            })}
          </ul>
          <input
            type="text"
            onKeyPress={onEnter}
            placeholder="Press enter to add tags"
          ></input>
        </div>
      </div>
    </div>
  );
}
