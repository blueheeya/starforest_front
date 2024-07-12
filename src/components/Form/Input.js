import React from "react";
import Icon from "../Icon/Icon";

function Input({
    children,
    className,
    iconName,
    value,
    onChange,
    placeholder,
    type,
}) {
    return (
        <div className={`${className}`}>
            {iconName && <Icon iconName={iconName} />}
            <input
                type={type}
                className={`serchInput`}
                value={value}
                onChange={onChange}
                placeholder={`${placeholder}`}
            ></input>
        </div>
    );
}

export default Input;
