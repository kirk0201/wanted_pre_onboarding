import React, { useState } from "react";
import "./Tab.scss";

export default function Tab() {
  const [tab, setTab] = useState({
    tab1: false,
    tab2: false,
    tab3: false,
  });
  const onTab1 = () => {
    setTab({ ...tab, tab1: !tab.tab1, tab2: false, tab3: false });
  };
  const onTab2 = () => {
    setTab({ ...tab, tab2: !tab.tab2, tab1: false, tab3: false });
  };
  const onTab3 = () => {
    setTab({ ...tab, tab3: !tab.tab3, tab1: false, tab2: false });
  };

  return (
    <div className="tabContainer">
      <nav className="tabNav">
        Tab
        <ul>
          <li className={tab.tab1 ? "liActive" : ""} onClick={onTab1}>
            Tab1
          </li>
          <li className={tab.tab2 ? "liActive" : ""} onClick={onTab2}>
            Tab2
          </li>
          <li className={tab.tab3 ? "liActive" : ""} onClick={onTab3}>
            Tab3
          </li>
        </ul>
      </nav>
      {tab.tab1 ? <Content1 tab={tab} /> : null}
      {tab.tab2 ? <Content2 /> : null}
      {tab.tab3 ? <Content3 /> : null}
    </div>
  );
}
function Content1({ tab }) {
  return (
    <div className={`tabContent ${tab.tab1 ? "tabActive" : ""}`}>
      Tab menu ONE
    </div>
  );
}
function Content2() {
  return <div className="tabContent">Tab menu TWO</div>;
}
function Content3() {
  return <div className="tabContent">Tab menu THREE</div>;
}
