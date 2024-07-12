import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Icon from "../Icon/Icon";

function UserName() {
    const [username, setUsername] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");

    const minLength = 2;
    const maxLength = 10;

    const validateusername = (user) => {
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

        if (user.length === 0) {
            setMessage("");
            setShowMessage(false);
            return false;
        } else {
            setShowMessage(true);
            if (user.length < minLength) {
                setMessage(`이름은 최소 ${minLength}자 이상이어야 합니다.`);
                setIsValid(false);
            } else if (specialChars.test(user)) {
                setMessage("이름에는 특수문자가 포함될 수 없습니다.");
                setIsValid(false);
            } else {
                setMessage("사용가능한 이름입니다.");
                setIsValid(true);
            }
        }
    };

    useEffect(() => {
        validateusername(username);
    }, [username]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= maxLength) {
            setUsername(newValue);
        }
    };

    return (
        <>
            <div className="memberInputWrap">
                <Input
                    iconName="inputIconId"
                    className="userRstInput"
                    placeholder="이름"
                    type="text"
                    value={username}
                    onChange={handleChange}
                    maxLength={maxLength}
                />
            </div>
            {showMessage && (
                <p className={isValid ? "completeMessge" : "errerMessge"}>
                    {isValid ? (
                        <Icon iconName="iconComplete" />
                    ) : (
                        <Icon iconName="iconDanger" />
                    )}
                    {message}
                </p>
            )}
        </>
    );
}

export default UserName;
