import React, { useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Icon from "../Icon/Icon";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const host = `${process.env.REACT_APP_SERVER_URL}api/member/checkemail`;

function Email({ placeholder, userAuth, changeHand, email }) {
    const [isValid, setIsValid] = useState(false);
    const [message, setMessage] = useState("");
    const [secretKey, setSecretKey] =useState({
        code : ""
    });
    // const userAuth = useState(false);
    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleClick = async (e) =>{
        e.preventDefault();
        if(!isValid){
            alert("올바르지 않은 이메일입니다.")
            return false;
        }
        else{
            const body = {
                email:email,
                result:false
            };
            // 요청을 보내면, 서버로부터 난수를 받아와서 비교 검증한다.
            try {
                const response = await axios.post(host, body);
                console.log("#########")
                console.log(response)
                setSecretKey({code: response.data.email}) // 여기를 난수로 바꿀예정
                return(
                    <>
                        //여기를 코드 입력받는 부분으로 만들어야함-> 그리고 인증하기 버튼을 누르면 핸들러 줘야함
                    </>
                )
            }
            catch (error){
                console.error('########nickCheckError', error);
                throw error;
            }
        }
    }

    const emailCheckHandler= (e)=>{
        //입력받은 값과 시크릿키랑 비교 -> 키가 일치하면 메시지를 띄워주고 register의 registInfo email값에 넣는다.
    }

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
                        <button className="btnSmallLine" onClick={handleClick}>인증하기</button>
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
