import React, { createContext, useContext, useEffect, useState } from "react";
import ModalResions from "./ModalResions";
import ModalStore from "./ModalStore";
import ModalReview from "./ModalReview";

// Modal Context 생성
const ModalContext = createContext();

function ModalWrap({ modalNum, modalView, modalClose }) {
    const modalData = [<ModalReview />, <ModalStore />, <ModalResions />];

    useEffect(() => {
        var containerWrapElement = document.querySelector(".containerWrap");
        if (modalView) {
            containerWrapElement.style.overflow = "hidden";
        } else {
            containerWrapElement.style.overflow = "auto";
        }
        return () => {
            containerWrapElement.style.overflow = "auto";
        };
    }, [modalView]);

    if (!modalView) return null;

    return (
        <div>
            {modalData[modalNum - 1]}
            <button onClick={modalClose}>닫기</button>
        </div>
    );
}
export const useModal = () => useContext(ModalContext);
