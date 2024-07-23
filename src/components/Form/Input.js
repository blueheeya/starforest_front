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
    //동일 수정
    const handleChange = (e) => {
        onChange(e.target.value)
    }
    //동일 수정
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
                onChange={handleChange}
                placeholder={`${placeholder}`}
            ></input>
        </div>
    );
}

export default Input;
