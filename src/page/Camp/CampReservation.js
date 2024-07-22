import React, { useEffect, useState } from "react";
import Calender from "../../components/Camp/Calendar";
import CampSelectCard from "../../components/Camp/CampSelectCard";
import axios from "axios";
import { useParams } from "react-router-dom";

function CampReservation() {
    const { id } = useParams()
    const [campInfo, setCampInfo] = useState(null);

    //동일 수정
    useEffect(() => {
        reservationScript()
    }, [])

    const reservationScript = async () => {
        try {
            const res = await axios.get(`http://localhost:8082/camp/reservation/${id}`)
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
        <>
            <CampSelectCard
                campInfo={campInfo}
                isCampCard={true}
                isLink={`/camp/view/${id}`}
                className="wrapCntBottom"
            />
            <Calender campInfo={campInfo} />
        </>
    );
}

export default CampReservation;
