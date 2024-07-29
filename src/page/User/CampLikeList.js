import React from "react";
import Icon from "../../components/Icon/Icon";
import Button from "../../components/Form/Button";
const Liked = [
    {
        id: 1,
        campsiteId: "campsiteId",
        userId: "userId",
        isRecordWritten: false,
        isLink: "/user/camp/reservation/view",
    },
    {
        id: 2,
        campsiteId: "campsiteId",
        userId: "userId",
        isRecordWritten: true,
        isLink: "/user/camp/reservation/view",
    },
    {
        id: 3,
        campsiteId: "campsiteId",
        userId: "userId",
        isRecordWritten: false,
        isLink: "/user/camp/reservation/view",
    },
];
function CampLikeList() {
    return (
        <>
            {Liked.length === 0 ? (
                <div className="noReservation">
                    <p>
                        찜한 캠핑장이 없습니다.
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
                    {Liked.map((likeItem) => (
                        <div className="myCampReserWrap" key={likeItem.id}>
                            <div className="myCampInfo">
                                <div className="myCampImg">이미지</div>
                                <div className="myCampInfoText">
                                    <ul>
                                        <li>오토캠핑</li>
                                        <li>캠프하다</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
}

export default CampLikeList;
