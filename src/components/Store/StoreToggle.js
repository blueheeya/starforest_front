import React, { useState, useRef, useEffect } from "react";
import StoreTopTen from "./StoreTopTen";
import Icon from "../Icon/Icon";

const StoreToggle = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setContentHeight(contentRef.current.scrollHeight);
    } else {
      setContentHeight(0);
    }
  }, [isOpen]);

  const toggleOpen = () => setIsOpen(!isOpen);

  //   return (
  //     <div className="toggleMenu">
  //       <div className="toggleHeader" onClick={toggleOpen}>
  //         <span>{title}</span>
  //         <span className="toogglerrow">{isOpen ? "▲" : "▼"}</span>
  //       </div>
  //       {isOpen && <div className="toggleContent">{children}</div>}
  //     </div>
  //   );
  // };

  // export default ToggleMenu;
  return (
    <div
      className="storeToggle"
      style={{
        height: isOpen ? `${74 + contentHeight}px` : "64px",
        transition: "height 0.3s ease-in-out",
      }}
    >
      <div className="toggleMenu">
        <div className="toggleHeader" onClick={toggleOpen}>
          <span>{title}</span>
          <span className="toggleArrow">
            {isOpen ? <Icon iconName="iconUp" /> : <Icon iconName="iconDown" />}
          </span>
        </div>
        <div
          className="toggleContent"
          ref={contentRef}
          style={{
            maxHeight: `${contentHeight}px`,
            overflow: "hidden",
            transition: "max-height 0.3s ease-in-out",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default StoreToggle;
