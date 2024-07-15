import React from "react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

function Input({
    children,
    className,
    iconName,
    value,
    onChange,
    placeholder,
    type,
    isLink,
    isOnclick,
}) {
    return (
        <div className={`${className}`}>
            {iconName && (
                <Icon
                    iconName={iconName}
                    onClick={isOnclick ? isOnclick : undefined}
                />
            )}
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
