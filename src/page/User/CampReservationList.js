import React from "react";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Form/Button";

const Reservation = [
    {
        id: 1,
        reservationNumber: 123123123,
        campsiteId: "campsiteId",
        userId: "userId",
        startDate: "2024.06.15",
        endDate: "2024.06.15",
        createdAt: "2024.06.15 14:00",
        isRecordWritten: false,
    },
    {
        id: 2,
        reservationNumber: 123123123,
        campsiteId: "campsiteId",
        userId: "userId",
        startDate: "2024.06.15",
        endDate: "2024.07.20",
        createdAt: "2024.06.15 14:00",
        isRecordWritten: true,
    },
    {
        id: 3,
        reservationNumber: 123123123,
        campsiteId: "campsiteId",
        userId: "userId",
        startDate: "2024.06.15",
        endDate: "2024.07.20",
        createdAt: "2024.06.15 14:00",
        isRecordWritten: false,
    },
];

function CampReservationList() {
    // 현재 날짜를 가져오는 함수
    const getCurrentDate = () => {
        return new Date().toISOString().split("T")[0];
    };

    // 버튼 표시 여부를 결정하는 함수
    const shouldShowButton = (startDate, endDate) => {
        const currentDate = new Date(getCurrentDate());
        const reservationStart = new Date(startDate);
        const reservationEnd = new Date(endDate);
        return currentDate >= reservationStart && currentDate <= reservationEnd;
    };

    // 버튼 활성화 여부를 결정하는 함수
    const isButtonActive = (endDate, isRecordWritten) => {
        const currentDate = new Date(getCurrentDate());
        return new Date(endDate) >= currentDate && !isRecordWritten;
    };
    return (
        <>
            {Reservation.length === 0 ? (
                <div className="noReservation">
                    <p>
                        예약된 내역이 없습니다.
                        <br />
                        캠핑장을 찾아볼까요?
                    </p>
                    <Button defaultBtn={true} to={"/camp/list"}>
                        <Icon iconName="iconCampSearch" />
                        캠핑장 찾아보기
                    </Button>
                </div>
            ) : (
                <div style={{ display: "inline-block" }}>
                    <div className="myCampNoteWrap">
                        <h4>유의사항</h4>
                        <p>&#8729; 예약번호 유출에 주의해 주세요.</p>
                        <p>&#8729; 당일 예약 취소는 불가합니다.</p>
                    </div>
                    {Reservation.map((reserItem) => (
                        <div className="mycampReserWrap" key={reserItem.id}>
                            <div className="myCampDate">
                                <span>{reserItem.createdAt}</span>
                                <span>
                                    예약번호 {reserItem.reservationNumber}
                                </span>
                            </div>
                            <div className="myCampInfo">
                                <div className="myCampImg">이미지</div>
                                <div className="myCampInfoText">
                                    <div>예약상황</div>
                                    <ul>
                                        <li>오토캠핑</li>
                                        <li>캠프하다</li>
                                        <li>{`${reserItem.startDate} ~ ${reserItem.endDate}`}</li>
                                    </ul>
                                    <div className="myCampDiary">
                                        {shouldShowButton(
                                            reserItem.startDate,
                                            reserItem.endDate
                                        ) && (
                                            <button
                                                className={
                                                    isButtonActive(
                                                        reserItem.endDate,
                                                        reserItem.isRecordWritten
                                                    )
                                                        ? "btnCampDiaryActive"
                                                        : "btnCampDiary"
                                                }
                                                disabled={
                                                    !isButtonActive(
                                                        reserItem.endDate,
                                                        reserItem.isRecordWritten
                                                    )
                                                }
                                            >
                                                <Icon
                                                    iconName={
                                                        isButtonActive(
                                                            reserItem.endDate,
                                                            reserItem.isRecordWritten
                                                        )
                                                            ? "menuLogActive"
                                                            : "iconLogUnload"
                                                    }
                                                />{" "}
                                                {isButtonActive(
                                                    reserItem.endDate,
                                                    reserItem.isRecordWritten
                                                )
                                                    ? "별숲기록 작성"
                                                    : "별숲기록 완료"}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default CampReservationList;
