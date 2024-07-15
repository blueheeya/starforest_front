import React, { useEffect, useState } from "react";
import Input from "../Form/Input";
import Icon from "../Icon/Icon";

function NickName({ value }) {
    const [nickname, setNickname] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [message, setMessage] = useState("");

    const minLength = 4;
    const maxLength = 8;

    const validatenickname = (nick) => {
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

        if (nick.length === 0) {
            setMessage("");
            setShowMessage(false);
            return false;
        } else {
            setShowMessage(true);
            if (nick.length < minLength) {
                setMessage(`닉네임은 최소 ${minLength}자 이상이어야 합니다.`);
                setIsValid(false);
            } else if (specialChars.test(nick)) {
                setMessage("닉네임에는 특수문자가 포함될 수 없습니다.");
                setIsValid(false);
            } else {
                setMessage("중복체크를 해주세요.");
                setIsValid(true);
            }
        }
    };

    useEffect(() => {
        validatenickname(nickname);
    }, [nickname]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        if (newValue.length <= maxLength) {
            setNickname(newValue);
        }
    };

    return (
        <>
            <div className="memberInputWrap">
                <Input
                    iconName="inputIconNick"
                    className="userRstInput"
                    placeholder="닉네임"
                    type="text"
                    value={nickname}
                    onChange={handleChange}
                    maxLength={maxLength}
                />
                <div className="timeWrap">
                    <button className="btnSmallLine">중복체크</button>
                </div>
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

export default NickName;
