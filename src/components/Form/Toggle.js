import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon/Icon";

const Toggle = ({ title, children }) => {
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

    return (
        <div
            className="customerToggle"
            style={{
                height: isOpen ? `${74 + contentHeight}px` : "64px",
                transition: "height 0.3s ease-in-out",
            }}
        >
            <div className="toggleMenu">
                <div className="toggleTitle" onClick={toggleOpen}>
                    <span>{title}</span>
                    <span className="toggleArrow">
                        {isOpen ? (
                            <Icon iconName="toggleClose" />
                        ) : (
                            <Icon iconName="toggleOpen" />
                        )}
                    </span>
                </div>
                <div
                    ref={contentRef}
                    style={{
                        maxHeight: `${contentHeight}px`,
                        overflow: "hidden",
                        transition: "max-height 0.3s ease-in-out",
                    }}
                >
                    <div className="toggleContent">{children}</div>
                </div>
            </div>
        </div>
    );
};

export default Toggle;
