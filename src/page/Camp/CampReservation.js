import React, { useEffect, useState } from "react";
import Calender from "../../components/Camp/Calendar";
import CampSelectCard from "../../components/Camp/CampSelectCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/Layout/Footer";

function CampReservation() {
    const { id } = useParams()
    const [campInfo, setCampInfo] = useState(null);

    //동일 수정
    useEffect(() => {
        reservationScript()
    }, [])

    const reservationScript = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/camp/reservation/${id}`)
            setCampInfo(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    if (campInfo === null) {
        return <div>Loading...</div>; // 로딩 중 상태를 표시
    }

    //동일 수정 완료
    return (
        <div className="cntView">
            <CampSelectCard
                campInfo={campInfo}
                isCampCard={true}
                isLink={`/camp/view/${id}`}
                className="wrapCntBottom"
            />

            <Calender campInfo={campInfo} />
            <Footer />
        </div>
    );
}

export default CampReservation;
