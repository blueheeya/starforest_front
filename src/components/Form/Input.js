import React from "react";
import Icon from "../Icon/Icon";

function Input({ children, className, iconName, value, onChange }) {
    return (
        <div className={`${className}`}>
            {iconName && <Icon iconName={iconName} />}
            <input
                type="text"
                className={`serchInput`}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
}

export default Input;
