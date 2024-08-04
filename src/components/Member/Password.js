import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import Input from "../../components/Form/Input";

function Password({changeHand}) {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const [confirmMessage, setConfirmMessage] = useState("");
    const [showMessage, setShowMessage] = useState(false);

    const validatePassword = (pw) => {
        const minLength = 8;
        const maxLength = 20;
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

        if (pw.length === 0) {
            setMessage("");
            return false;
        } else if (pw.length < minLength) {
            setMessage(`비밀번호는 최소 ${minLength}자 이상이어야 합니다.`);
            return false;
        } else if (pw.length > maxLength) {
            setMessage(`비밀번호는 최대 ${maxLength}자를 초과할 수 없습니다.`);
            return false;
        } else if (!specialChars.test(pw)) {
            setMessage("비밀번호에는 특수문자가 포함되어야 합니다.");
            return false;
        } else {
            setMessage("유효한 비밀번호입니다.");
            return true;
        }
    };

    useEffect(() => {
        if (password.length > 0) {
            setShowMessage(true);
            const isPasswordValid = validatePassword(password);
            setIsValid(isPasswordValid);
        } else {
            setShowMessage(false);
            setIsValid(false);
        }

        if (confirmPassword) {
            if (password === confirmPassword) {
                const doChange = {
                    target:{
                        name: "pass_word",
                        value: password
                    }
                }
                changeHand(doChange);

                setConfirmMessage(() => (
                    <>
                        <Icon iconName="iconComplete" />
                        비밀번호가 일치합니다.
                    </>
                ));
            } else {
                setConfirmMessage(() => (
                    <>
                        <Icon iconName="iconDanger" />
                        비밀번호가 일치하지 않습니다.
                    </>
                ));
            }
        } else {
            setConfirmMessage("");
        }
    }, [password, confirmPassword]);

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };
    return (
        <>
            <Input
                iconName="inputIconPw2"
                className="userRstInput"
                placeholder="새로운 비밀번호 "
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
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
            <Input
                iconName="inputIconPwCheck"
                className="userRstInput"
                placeholder="새로운 비밀번호 확인"
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            <p
                className={
                    confirmPassword && password === confirmPassword
                        ? "completeMessge"
                        : "errerMessge"
                }
            >
                {confirmMessage}
            </p>
        </>
    );
}

export default Password;
