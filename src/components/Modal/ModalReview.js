import React, { useState } from "react";
import Button from "../Form/Button";
import Icon from "../Icon/Icon";

function ModalReview({ onClick }) {
    return (
        <div className="modalWrap">
            <div className="modal">
                <div>리뷰 작성 모달</div>
                <div className="modal_Content">
                    <Button defaultBtn={true}>확인</Button>
                </div>
                <button onClick={onClick} className="btnCloseType1">
                    <Icon iconName="iconCloseWhite" />
                </button>
            </div>
        </div>
    );
}

export default ModalReview;
