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
    linkTo,
}) {
    return (
        <div className={`${className}`}>
            {iconName && (
                <Link to={linkTo}>
                    <Icon iconName={iconName} />
                </Link>
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
