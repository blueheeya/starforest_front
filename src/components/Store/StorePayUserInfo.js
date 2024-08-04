import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

function StorePayUserInfo({ handleStorPayInfo }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch
    } = useForm({ mode: "onChange" });
    const [uAddress, setUAddress] = useState("");

    const onSubmit = (body) => {
        console.log(body);
        handleStorPayInfo(body)
        alert("배송 정보 확인완료!!")
    }

    useEffect(() => {
        // 스크립트가 이미 로드되어 있는지 확인
        if (!window.daum) {
            const script = document.createElement("script");
            script.src =
                "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
            script.async = true;
            // script.onload = () => {
            //   openPostcode();
            // };
            document.head.appendChild(script);
        } else {
            // openPostcode();
        }
    }, []);

    const handleTextFieldClick = () => {
        openPostcode(); // TextFieldLine 클릭 시 주소 입력 창 열기
    };

    const openPostcode = () => {
        new window.daum.Postcode({
            oncomplete: function (data) {
                // 팝업에서 검색결과 항목을 클릭했을 때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                setUAddress(data.address);
            },
        }).open();
    };

    const name = {
        required: {
            value: true,
            message: "수령인을 입력해 주세요",
        },
        maxLength: {
            value: 20,
            message: "20자 이내로 입력해주세요",
        },
        pattern: {
            value: /^[^\s]+$/,
            message: "공백 문자는 제외해주세요",
        },
    };
    const tel = {
        required: {
            value: true,
            message: "전화번호를 입력해 주세요",
        },
        maxLength: {
            value: 20,
            message: "20자 이내로 입력해주세요",
        },
        pattern: {
            value: /^[0-9]+$/,
            message: "전화번호는 숫자만 입력 가능합니다.",
        },
    };
    const addressDetail = {
        required: {
            value: true,
            message: "상세주소를 입력해 주세요",
        },
        maxLength: {
            value: 20,
            message: "20자 이내로 입력해주세요",
        },
        pattern: {
            value: /^[^\s]+$/,
            message: "공백 문자는 제외해주세요",
        },
    };

    return (
        <div className='storePayUserInfo'>
            <div className='storePayUserInfoInner'>
                <div className='innerTitle'>배송지 정보</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='innerContent'>
                        <div className='innerBox'>
                            <div className='boxName'>수령인</div>
                            <input className='boxInput' id='name' type="text" placeholder="성함을 입력해 주세요."
                                {...register("name", name)}
                            />
                        </div>
                        {errors.name && (
                            <div style={{ color: "red", fontSize: 14 }}>{errors.name.message}</div>
                        )}
                        <div className='innerBox'>
                            <div className='boxName'>연락처</div>
                            <input className='boxInput' id='tel' type="text" placeholder="연락처를 입력해 주세요."
                                {...register("tel", tel)}
                            />
                        </div>
                        {errors.tel && (
                            <div style={{ color: "red", fontSize: 14 }}>{errors.tel.message}</div>
                        )}
                        <div className='innerBox'>
                            <div className='boxName'>주소</div>
                            <input className='boxInput' id='address' type="text" placeholder="주소를 입력해 주세요."
                                onClick={handleTextFieldClick}
                                value={uAddress.replace(/\s+/g, '')}
                                {...register("address")}
                            />
                        </div>
                        <div className='innerBox'>
                            <div className='boxName'>상세주소</div>
                            <input className='boxInput' id='addressDetail' type="text" placeholder="상세주소를 입력해 주세요"
                                {...register("addressDetail", addressDetail)}
                            />
                        </div>
                        {errors.addressDetail && (
                            <div style={{ color: "red", fontSize: 14 }}>{errors.addressDetail.message}</div>
                        )}
                        <div className='storeUserInfoWrap'>
                            <button className='storeUserBtn'>배송지 정보 저장</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default StorePayUserInfo