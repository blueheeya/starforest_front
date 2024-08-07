import React from "react";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

function Input({
    children,
    className,
    iconName,
    value,
    name,
    onChange,
    placeholder,
    type,
    isLink,
    isOnclick,
}) {
    var temp = "";
    //동일 수정
    const handleChange = (e) => {
        temp += e.target.value;
        onChange(temp);
    };
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
                name={name}
                placeholder={`${placeholder}`}
            ></input>
        </div>
    );
}

export default Input;
