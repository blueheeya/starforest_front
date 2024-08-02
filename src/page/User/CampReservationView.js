import CampSelectCard from "../../components/Camp/CampSelectCard";
import { useSelector } from "react-redux";
import { useNavigate, useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Form/Button";
import axios from "axios";
import PageLoading from "../../components/Layout/PageLoading";

function CampReservationView() {
    const host = `${process.env.REACT_APP_SERVER_URL}user/camp/view`;
    const email = useSelector((state) => {
        return state.loginSlice.email;
    });
    const { reservationid } = useParams();
    const [page, setPage] = useState(0);
    const [campData, setCampData] = useState({})
    const [campPropsData, setCampPropsData] =useState({})
    const [reservData, setReservData]=useState({})

    const myReservation = async () => {
        try {
            const url = `${host}?reservationid=${reservationid}&email=${email}`;
            const response = await axios.get(url);
            const newCamps = response.data;
            console.log(newCamps);
            setCampData([]); // 기존 데이터 초기화
            if (newCamps.length === 0) {
                
            } else {
                setCampPropsData(newCamps.camp)
                setReservData(newCamps.reservation)
                setCampData(newCamps[0]);
                console.log("1")
                console.log(campData)
                console.log(reservData)
                console.log(campPropsData)
            }
        } catch (error) {
            console.error("Error fetching camp data:", error);
        }
    };

    useEffect(() => {
        myReservation();
    }, [page]);

    if (campData.length === 0) {
        return <PageLoading />;
    }

    const printDate=(date)=>{
        let year =0, month =0, day =0;
        console.log("ASDasdasdasdasd")
        console.log(date)
        // if(date.length>0){
        //     year= ((date[0])-2000);
        //     month= date[1];
        //     day= date[2]
        // }
        return `${year}.${month}.${day}`;
    }

    return (
        <>
            <div style={{ paddingTop: "10px" }}>
                <div className="myCampCardWrap">
                    <h4>예약 캠핑장 정보</h4>
                </div>
                <CampSelectCard isCampCard={true} campInfo={campPropsData} className="wrapCntBottom" />
                <div className="myCampReserWrap">
                    <h4>예약 날짜</h4>
                    <div>{`${printDate(reservData.start_date)} ~ ${printDate(reservData.end_date)}`}</div>
                </div>
                <div className="myCampReserWrap">
                    <h4>예약자 정보</h4>
                    <div className="myCampReserInfo">
                        <div>
                            <span>이름</span> 최금쪽
                        </div>
                        <div>
                            <span>연락처</span> 010-1234-5678
                        </div>
                        <div>
                            <span>요구사항</span> 좋은말로 할때 내 요구사항을 다
                            들어라!
                        </div>
                        <div>
                            <span>차량번호</span> 1234
                        </div>
                    </div>
                </div>
                <div className="myCampReserWrap">
                    <h4>할인 적용</h4>
                    <div></div>
                </div>
                <div className="myCampReserWrap">
                    <h4>결제 금액</h4>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default CampReservationView;
