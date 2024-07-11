import React from "react";
import iconEdit from "../../assets/images/iconEdit.svg";
import { useNavigate } from "react-router-dom";

function PayComplete({ contents }) {
  const navigate = useNavigate();
  const pagemove = () => {
    navigate(contents.url1);
  };
  const pagemove2 = () => {
    navigate(contents.url2);
  };
  return (
    <>
      <div>
        <div className="completeContent">{contents.title}</div>
        <div className="completeBtn">
          <div className="completeBtnAll">
            <button className="completeInner" onClick={pagemove}>
              <img src={iconEdit} alt="" />
              <div>{contents.btn1}</div>
            </button>
          </div>
          <div className="completeBtnAll">
            <button className="completeInner" onClick={pagemove2}>
              <img src={iconEdit} alt="" />
              <div>{contents.btn2}</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PayComplete;
