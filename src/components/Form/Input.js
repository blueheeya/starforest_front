import React from "react";
import Icon from "../Icon/Icon";

function Input({
    children,
    className,
    iconName,
    value,
    onChange,
    placeholder,
}) {
    return (
        <div className={`${className}`}>
            {iconName && <Icon iconName={iconName} />}
            <input
                type="text"
                className={`serchInput`}
                value={value}
                onChange={onChange}
                placeholder={`${placeholder}`}
            ></input>
        </div>
    );
}

export default Input;
