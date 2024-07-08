import React from "react";

const Tab = ({ tab, onClick, isActive }) => {
  return (
    <li role="presentation" style={{ minWidth: "100px" }}>
      <a
        href="#"
        role="tab"
        tabIndex="0"
        id={tab.id}
        aria-selected={isActive.toString()}
        className={isActive ? "on" : ""}
        onClick={() => onClick(tab.id)}
      >
        <span>{tab.label}</span>
      </a>
    </li>
  );
};

export default Tab;
