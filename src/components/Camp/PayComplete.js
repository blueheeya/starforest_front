import React from "react";
import iconEdit from "../../assets/images/iconEdit.svg";

function PayComplete({ contents }) {
  return (
    <>
      <div>
        <div className="completeContent">{contents.title}</div>
        <div className="completeBtn">
          <div className="completeBtnAll">
            <button className="completeInner">
              <img src={iconEdit} alt="" />
              <div>{contents.btn1}</div>
            </button>
          </div>
          <div className="completeBtnAll">
            <button className="completeInner">
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
