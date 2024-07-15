import React from "react";

function Checkbox({
    children,
    text,
    className,
    type,
    id,
    forName,
    onChange,
    checked,
    level,
}) {
    return (
        <div className={`checkboxWrap ${className}`}>
            <div className="inputcheck">
                <input
                    type={type || "checkbox"}
                    id={id}
                    data-level={level}
                    checked={checked}
                    onChange={onChange}
                />
                <span></span>
            </div>
            <label htmlFor={forName} className="labelWrap">
                {children}
                <span>{text}</span>
            </label>
        </div>
    );
}

export default Checkbox;
