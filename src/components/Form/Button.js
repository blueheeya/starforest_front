import React from "react";

function Button({ defaultBtn, children, className }) {
    return (
        <>
            {defaultBtn === true ? (
                <button className={`btnDefault btnPrimary ${className}`}>
                    {children}
                </button>
            ) : (
                <button className={`btnDefault btnNormal ${className}`}>
                    {children}
                </button>
            )}
        </>
    );
}

export default Button;
