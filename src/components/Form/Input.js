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
    isOnclick
}) {
    var temp = "";
    //동일 수정
    // const handleChange = (e) => {
    //     temp += e.target.value
    //     onChange(temp)
    // }
    //동일 수정

    const handleChange = (e) => {
        console.log(e.target.value)
        temp += e.target.value;
        onChange ? onChange(e) : console.log(e.target.value);
    };
    //동일 수정

    return (
        <div className={`${className}`}>
            {iconName && (
                <Icon
                    iconName={iconName}
                    onClick={isOnclick ? isOnclick : null}
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
