import React, {useEffect, useState} from "react";
import Icon from "../../components/Icon/Icon";
import Email from "../../components/Member/Email";
import Button from "../../components/Form/Button";
import Input from "../../components/Form/Input";
import Password from "../../components/Member/Password";
import NickName from "../../components/Member/NickName";
import UserName from "../../components/Member/UserName";
import useCustomLogin from "../hooks/useCustomLogin";
import axios from "axios";

const host = `${process.env.REACT_APP_SERVER_URL}api/member/register`;

const initState={
    email: false,
    pass_word: false,
    nick_name: false,
    profile_url: "https://starforest.s3.ap-northeast-2.amazonaws.com/imageuploads/user/user1.png",
    introduce : "기본 소개입니다.",
    name: false,
    login_type:0,
    grade: 1
}

function Register() {
    const [registInfo, setRegistInfo] = useState({...initState});
    const [isChecked, setIsChecked] = useState({
        "email": false,
        "nick_name": false
    });
    const {moveToPath} = useCustomLogin();

    useEffect(() => {
        console.log(registInfo)
    }, [registInfo]);


    const checkInput = (registInfo) => {
        console.log(registInfo);
        if(registInfo.email && registInfo.pass_word && registInfo.nick_name && registInfo.nick_name){
            return true
        }
        return false;
    }

    const handleClickRegist = async (e)=>{
        e.preventDefault();
        if(!checkInput(registInfo)){
            alert("가입 정보를 다시 확인하여 주세요.");
            return false;
        }
        else{
            const body = {
                ...registInfo
            };

            try {
                const response = await axios.post(host, body);
                return moveToPath("/member/register/complete");
            }
            catch (error){
                console.error('########registerError', error);
                throw error;
            }
        }
    }

    const changeHandler= (e) =>{
        console.log(e.target.value)
        setRegistInfo((prevState)=>({
            ...prevState,
            [e.target.name] : e.target.value,
        }))
    }

    return (
        <div className="memberContainer cntMarginTop cntMarginBottom">
            <div
                className="logoWrap cntMarginBottom"
                style={{ marginTop: "64px" }}
            >
                <h2>
                    별이 빛나는 밤, <br />
                    너와 나의 감성 캠핑
                </h2>
                <Icon iconName="logoDefault" />
            </div>
            <div className="memberInputWrap cntMarginBottom">
                <Email placeholder="이메일을 입력해주세요." checkHandler={setIsChecked} changeHand={changeHandler} email={registInfo.email} userAuth={true}/>
                <UserName changeHand={changeHandler}/>
                <NickName changeHand ={changeHandler}/>
                <Password changeHand ={changeHandler}/>
            </div>
            <Button
                defaultBtn={true}
                className="wrapMarginBottom"
                onClick={handleClickRegist}
            >
                회원가입
            </Button>
        </div>
    );
}

export default Register;
