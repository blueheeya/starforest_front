import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import PageLoading from "../../components/Layout/PageLoading";
import { useSelector } from "react-redux";

const Reservation = [{}];

function CampReservationList() {
    const host = `${process.env.REACT_APP_SERVER_URL}user/camp/list`;
    const email = useSelector((state) => {
        return state.loginSlice.email;
    });
    const [CampReservation, setCampsReservation] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const myReservation = async (req, res) => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            let url = `${host}?page=${page}&size=${
                page === 0 ? 20 : 5
            }&email=${email}`;
            const response = await axios.get(url);
            const newCamps = response.data;
            console.log(newCamps);
            setTimeout(() => {
                if (newCamps.length === 0) {
                    setHasMore(false);
                } else {
                    setCampsReservation((prevCamps) => [
                        ...prevCamps,
                        ...newCamps,
                    ]);
                }
                setLoading(false); // 로딩 종료
            }, 2000); // 2초 후에 실행
        } catch (error) {
            console.error("Error fetching camp data:", error);
        } finally {
            setTimeout(() => {
                setLoading(false); // 에러 발생 시에도 2초 후 로딩 종료
            }, 2000);
        }
    };
    useEffect(() => {
        myReservation();
    }, [page]);
    // 현재 날짜를 가져오는 함수
    const getCurrentDate = () => {
        return new Date().toISOString().split("T")[0];
    };

    // 버튼 표시 여부를 결정하는 함수
    const shouldShowButton = (start_date, end_date) => {
        const currentDate = new Date(getCurrentDate());
        const reservationStart = new Date(start_date);
        const reservationEnd = new Date(end_date);
        return currentDate >= reservationStart && currentDate <= reservationEnd;
    };

    // 버튼 활성화 여부를 결정하는 함수
    const isButtonActive = (end_date, isRecordWritten) => {
        const currentDate = new Date(getCurrentDate());
        return new Date(end_date) >= currentDate && !isRecordWritten;
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
                <div style={{ display: "inline-block", width: "100%" }}>
                    <div className="myCampNoteWrap">
                        <h4>유의사항</h4>
                        <p>&#8729; 예약번호 유출에 주의해 주세요.</p>
                        <p>&#8729; 당일 예약 취소는 불가합니다.</p>
                    </div>
                    {CampReservation.map((reserItem) => (
                        <div className="myCampReserWrap" key={reserItem.id}>
                            <div className="myCampDate">
                                <span>{reserItem.create_at}</span>
                                <span>
                                    예약번호
                                    <Link
                                        to={`/user/camp/reservation/view/${reserItem.id}`}
                                    >
                                        {reserItem.reservation_number}
                                    </Link>
                                </span>
                            </div>
                            <div className="myCampInfo">
                                <div className="myCampImg">
                                    <img
                                        src={`${reserItem.camp.first_image_url}`}
                                    />
                                </div>
                                <div className="myCampInfoText">
                                    <div>
                                        <span className="campRestComplete">
                                            예약상황
                                        </span>
                                    </div>
                                    <ul>
                                        <li>오토캠핑</li>
                                        <li>{reserItem.camp.name}</li>
                                        <li>{`${reserItem.start_date} ~ ${reserItem.end_date}`}</li>
                                    </ul>
                                    <div className="myCampDiary">
                                        {shouldShowButton(
                                            reserItem.start_date,
                                            reserItem.end_date
                                        ) &&
                                            (isButtonActive(
                                                reserItem.end_date,
                                                reserItem.isRecordWritten
                                            ) ? (
                                                <Link
                                                    to={`/diary/write`}
                                                    className="btnCampDiaryActive"
                                                >
                                                    <Icon iconName="menuLogActive" />
                                                    별숲기록 작성
                                                </Link>
                                            ) : (
                                                <button
                                                    className="btnCampDiary"
                                                    disabled={true}
                                                >
                                                    <Icon iconName="iconLogUnload" />
                                                    별숲기록 완료
                                                </button>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {loading && <PageLoading />}
                    {!hasMore && <p>더 이상 예약 내역이 없습니다.</p>}
                </div>
            )}
        </>
    );
}

export default CampReservationList;
