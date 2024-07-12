import React from "react";
import Icon from "../Icon/Icon";

function Modal({ onClick }) {
    return (
        <div className="modalWrap">
            <div className="modal">
                <div className="modal_Content">
                    <h2>Modal</h2>
                    dakdfdsfads
                </div>
                <button onClick={onClick} className="btnCloseType1">
                    <Icon iconName="iconCloseWhite" />
                </button>
            </div>
        </div>
    );
}

export default Modal;
