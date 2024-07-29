import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ defaultBtn, children, className, onClick, to }) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        if (to) {
            navigate(to);
        }
        if (onClick) {
            onClick(e);
        }
    };
    return (
        <>
            {defaultBtn === true ? (
                <button
                    className={`btnDefault btnPrimary ${className}`}
                    onClick={handleClick}
                >
                    {children}
                </button>
            ) : (
                <button
                    className={`btnDefault btnNormal ${className}`}
                    onClick={handleClick}
                >
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
