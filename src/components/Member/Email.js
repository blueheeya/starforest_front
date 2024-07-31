import React, { useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Icon from "../Icon/Icon";
import {useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

function Email({ placeholder, userAuth, changeHand, email }) {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    // const userAuth = useState(false);
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };
    const shouldValidate = !useLocation().pathname.startsWith("/member/login");
    useEffect(() => {
        if (email && shouldValidate) {
            if (validateEmail(email)) {
                setIsValid(true);
                setMessage(() => {
                    return (
                        <>
                            <Icon iconName="iconComplete" />
                            사용 가능한 이메일 주소입니다.
                        </>
                    );
                });
            } else {
                setIsValid(false);
                setMessage(() => {
                    return (
                        <>
                            <Icon iconName="iconDanger" />
                            유효하지 않은 이메일 주소입니다.
                        </>
                    );
                });
            }
        } else {
            setMessage("");
        }
    }, [email]);


    return (
        <>
            <div className="memberInputWrap">
                <Input
                    iconName="inputIconEmail"
                    className="userRstInput"
                    placeholder={placeholder}
                    type="email"
                    name ="email"
                    params={email}  동규수정0725
                    onChange={changeHand}
                    userAuth={userAuth}
                />
                {userAuth === true ? (
                    <div className="timeWrap">
                        <button className="btnSmallLine">인증하기</button>
                    </div>
                ) : null}
            </div>

            {message && (
                <p className={isValid ? "completeMessge" : "errerMessge"}>
                    {message}
                </p>
            )}
        </>
    );
}

export default Email;
