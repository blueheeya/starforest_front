// Overlay.jsx
import React, { useEffect } from "react";
import "../../assets/css/storeStyle.scss";

const Overlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return <div className="overlay" onClick={onClose}></div>;
};

export default Overlay;
