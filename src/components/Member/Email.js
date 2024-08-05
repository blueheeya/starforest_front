import React, { useState, useEffect } from "react";
import Input from "../../components/Form/Input";
import Icon from "../Icon/Icon";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import useCustomLogin from "../../page/hooks/useCustomLogin";
import Button from "../../components/Form/Button";

const host = `${process.env.REACT_APP_SERVER_URL}api/member/checkemail`;

function TimerWithButton({ initialTime = 60, onTimerEnd }) {
    const [timeLeft, setTimeLeft] = useState(initialTime);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setTimeout(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearTimeout(timerId);
        } else {
            setIsButtonVisible(true);
            if (onTimerEnd) onTimerEnd();
        }
    }, [timeLeft, onTimerEnd]);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };
}

function Email({ checkHandler ,placeholder, changeHand,  email, userAuth}) {
    const [isValid, setIsValid] = useState(false);
    const [isSubmitCheck, setIsSubmitCheck] = useState(false);
    const [userInputCheck, setUserInputCheck] = useState(false);
    const [message, setMessage] = useState("");
    const [secretKey, setSecretKey] =useState({
        "code" : ""
    });
    const [userInput , setUserInput] = useState("")
    const [life , setLife]= useState(1)
    const { moveToPath } = useCustomLogin();

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    const handleClick = async (e) =>{
        e.preventDefault();
        if(!isValid){
            alert(`${message}`)
            return false;
        }
        try {
            const body = {
                email: email
            }
            console.log(secretKey.code)
            if(secretKey.code==="" && !isSubmitCheck) {
                setIsSubmitCheck(true);
                const response = await axios.post(host, body);
                console.log(response)
                console.log(response.data)
                if (response.data.done) {
                    alert(`${body.email}으로 인증번호가 발송되었습니다.`)
                    setUserInputCheck(true)
                    setMessage("")
                    setSecretKey({
                        "code": response.data.secretKey,
                        "createdAt": response.data.createdAt
                    })
                } else {
                    alert("이미 사용중인 이메일입니다.")
                    setMessage("이미 사용중인 이메일입니다.")
                    setIsValid(false)
                    setIsSubmitCheck(false);
                }
            }
            else if(isSubmitCheck){
                console.log("메일 전송중입니다.")
                alert("메일을 전송하고 있습니다. 잠시만 기다려주세요.")
            }
            else{
                console.log("에러가 발생했습니다.")
                alert("에러가 발생했습니다. 다시 시도하여주세요.")
            }

        } catch (error) {
                console.error('########nickCheckError', error);
                throw error;
        }
    }


    //userInputCheck-> 유저인증하기보이기체크용, userInput->유저의 인증코드 확인용, isSubmitCheck=> 중복인증방지용 , isValid
    const handleConfirmButton=(e)=>{
        console.log(userInput)
        console.log("시크릿키 : "+ secretKey.code)
        if(secretKey.code === userInput){
            console.log("일치")
            checkHandler(true)
            setUserInputCheck(false)
            setIsSubmitCheck(false)
            setMessage("인증이 완료되었습니다.")
            setIsValid(true)
        }
        else{
            checkHandler(false)
            setLife(life+1)
            if(life==5){
                alert("확인후 다시 시도하여주세요.")
                moveToPath("/member/login");
            }
            else{
                alert(`다시 시도하여 주세요. ${life}/5`)
            }
        }
    }


    const emailCheckHandler = (e) => {
        //입력받은 값과 시크릿키랑 비교 -> 키가 일치하면 메시지를 띄워주고 register의 registInfo email값에 넣는다.

        userAuth(true); // 인증값이 틀리면 false, 맞으면 true
        checkHandler(true)
    }

    const userInputHandler = (e)=>{
        setUserInput(e.target.value);
    }

    const shouldValidate = !useLocation().pathname.startsWith("/member/login");
    useEffect(() => {
        if (email && shouldValidate) {
            if (validateEmail(email)) {
                setIsValid(true);
                setMessage(() => {
                    return (
                        <>
                            <Icon iconName="iconComplete"/>
                            사용 가능한 이메일 주소입니다.
                        </>
                    );
                });
            } else {
                setIsValid(false);
                setMessage(() => {
                    return (
                        <>
                            <Icon iconName="iconDanger"/>
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
                />
                { userAuth=== true && !isSubmitCheck ? (
                        <div className="timeWrap">
                            <button className="btnSmallLine" onClick={handleClick}>인증하기</button>
                        </div>
                ) : (
                    null
                )}
                {userInputCheck?(
                    <div className="memberInputWrap">
                        <Input
                            className="userRstInput"
                            placeholder="인증번호를 입력하세요."
                            onChange={userInputHandler}
                        />
                        <TimerWithButton initialTime={180}/>
                        <button className="btnSmallLine" onClick={handleConfirmButton}>인증하기</button>
                    </div>
                ):(null)}
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
