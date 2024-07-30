import React from "react";
import { useForm } from "react-hook-form";

function CampPayInput({ reservInfo }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({ mode: "onChange" });

  const onSubmit = (body) => {
    console.log(body);
    reservInfo(body)
    alert("예약자 정보가 저장되었습니다.")
  }

  const name = {
    required: {
      value: true,
      message: "이름은 필수입니다.",
    },
    maxLength: {
      value: 20,
      message: "20자 이내로 입력해주세요",
    },
  };

  const tel = {
    required: {
      value: true,
      message: "전화번호는 필수입니다.",
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="campPayInput">
        <div className="inputTitle">예약자 정보</div>
        <div className="inputContent">
          <div className="inputBox">
            <div className="boxName">
              이름<span>*</span>
            </div>
            <input className="boxInput" type="text" placeholder="이름 입력" id="names"
              {...register("names", name)}
            />
          </div>
          {errors.names && (
            <div style={{ color: "red", fontSize: 14 }}>
              {errors.names.message}
            </div>
          )}
          <div className="inputBox">
            <div className="boxName">
              연락처<span>*</span>
            </div>
            <input className="boxInput" type="text" placeholder="- 없이 숫자만 입력해주세요" id="tel"
              {...register("tel", tel)}
            />
          </div>
          {errors.tel && (
            <div style={{ color: "red", fontSize: 14 }}>
              {errors.tel.message}
            </div>
          )}
          <div className="inputBox boxAnother">
            <div className="boxName">요청사항</div>
            <textarea
              className="boxInput"
              type="text"
              placeholder="요청사항 입력"
              id="request"
              {...register("request")}
            />
          </div>
          <div className="inputBox">
            <div className="boxName">차량번호</div>
            <input
              className="boxInput"
              type="text"
              placeholder="차량번호 입력"
              id="car_number"
              {...register("car_number")}
            />
          </div>
        </div>
      </div>
      <div className="reservInfoWrap">
        <button className="reservInfoSave" type="submit">예약 정보 저장하기</button>
      </div>
    </form>
  );
}

export default CampPayInput;
