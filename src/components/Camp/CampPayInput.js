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
  }

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
              {...register("names")}
            />
          </div>
          <div className="inputBox">
            <div className="boxName">
              연락처<span>*</span>
            </div>
            <input className="boxInput" type="text" placeholder="- 없이 숫자만 입력해주세요" id="tel"
              {...register("tel")}
            />
          </div>
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
      <button type="submit">테스트</button>
    </form>
  );
}

export default CampPayInput;
