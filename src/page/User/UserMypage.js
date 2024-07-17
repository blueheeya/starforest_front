import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../../components/Icon/Icon";
import EventSwiper from "../../components/Store/EventSwiper";
import UserCard from "../../components/User/UserCard";

function UserMypage() {
    const [tabButton, setTabButton] = useState("tab1");
    const handleTabChange = (tab) => {
        setTabButton(tab);
    };
    const [memberButton, setMemberButton] = useState("member1");
    const handleMemberChange = (member) => {
        setMemberButton(member);
    };
    return (
        <>
            <UserCard
                className="cntMarginTop cntMarginBottom"
                userMyCard={true}
            />
            <div className="myTabWrap">
                <div
                    onClick={() => handleTabChange("tab1")}
                    className={tabButton === "tab1" ? "active" : ""}
                >
                    내 캠핑 보기
                </div>
                <div
                    onClick={() => handleTabChange("tab2")}
                    className={tabButton === "tab2" ? "active" : ""}
                >
                    내 쇼핑 보기
                </div>
            </div>
            <div className="myPageDate cntMarginBottom">
                {tabButton === "tab1" && (
                    <>
                        <Link to="/user/camp/reservation/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconReservation" />
                                </li>
                                <li>예약 목록</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                        <Link to="/user/camp/like/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconMyLike" />
                                </li>
                                <li>찜 목록</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                        <Link to="/user/diary/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconMyLog" />
                                </li>
                                <li>별숲 기록</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                    </>
                )}
                {tabButton === "tab2" && (
                    <>
                        <Link to="/user/store/order/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconDelivery" />
                                </li>
                                <li>주문/배송</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                        <Link to="/user/store/cart/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconCart" />
                                </li>
                                <li>장바구니</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                        <Link to="/user/store/review/list">
                            <ul>
                                <li>
                                    <Icon iconName="iconMyReview" />
                                </li>
                                <li>리뷰</li>
                                <li>0건</li>
                            </ul>
                        </Link>
                    </>
                )}
            </div>
            <div className="membershipWrap cntMarginBottom">
                <h4>멤버쉽 등급</h4>
                <div className="memberWrap">
                    <div className="memberTab">
                        <div
                            onClick={() => handleMemberChange("member1")}
                            className={
                                memberButton === "member1" ? "active" : ""
                            }
                        >
                            <Icon iconName="level1" />
                            샛별
                        </div>
                        <div
                            onClick={() => handleMemberChange("member2")}
                            className={
                                memberButton === "member2" ? "active" : ""
                            }
                        >
                            <Icon iconName="level2" />
                            잔별
                        </div>
                        <div
                            onClick={() => handleMemberChange("member3")}
                            className={
                                memberButton === "member3" ? "active" : ""
                            }
                        >
                            <Icon iconName="level3" />
                            뭇별
                        </div>
                        <div
                            onClick={() => handleMemberChange("member4")}
                            className={
                                memberButton === "member4" ? "active" : ""
                            }
                        >
                            <Icon iconName="level4" />
                            금별
                        </div>
                    </div>
                    <div className="memberInfo">
                        {memberButton === "member1" && (
                            <div>
                                <h4>샛별</h4>
                                <p>
                                    <span>혜택</span>
                                    별숲에서 캠핑장 예약, 캠핑 용품 구매시 자동
                                    5% 할인
                                </p>
                                <p>
                                    <span>기준</span>
                                    별숲 가입 즉시 샛별 등급 부여
                                </p>
                                <p>
                                    <span>기간</span>
                                    해당 년도 1월 1일 ~ 12월 31일
                                </p>
                            </div>
                        )}
                        {memberButton === "member2" && (
                            <div>
                                <h4>잔별</h4>
                                <p>
                                    <span>혜택</span>
                                    별숲에서 캠핑장 예약, 캠핑 용품 구매시 자동
                                    10% 할인
                                </p>
                                <p>
                                    <span>기준</span>
                                    기간 내 3회 이상 캠핑장 예약/이용 고객
                                </p>
                                <p>
                                    <span>기간</span>
                                    해당 년도 1월 1일 ~ 12월 31일
                                </p>
                            </div>
                        )}
                        {memberButton === "member3" && (
                            <div>
                                <h4>뭇별</h4>
                                <p>
                                    <span>혜택</span>
                                    별숲에서 캠핑장 예약, 캠핑 용품 구매시 자동
                                    20% 할인
                                </p>
                                <p>
                                    <span>기준</span>
                                    기간 내 10회 이상 캠핑장 예약/이용 고객
                                </p>
                                <p>
                                    <span>기간</span>
                                    해당 년도 1월 1일 ~ 12월 31일
                                </p>
                            </div>
                        )}
                        {memberButton === "member4" && (
                            <div>
                                <h4>금별</h4>
                                <p>
                                    <span>혜택</span>
                                    별숲에서 캠핑장 예약, 캠핑 용품 구매시 자동
                                    30% 할인
                                </p>
                                <p>
                                    <span>기준</span>
                                    기간 내 20회 이상 캠핑장 예약/이용 고객
                                </p>
                                <p>
                                    <span>기간</span>
                                    해당 년도 1월 1일 ~ 12월 31일
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="customerWrap cntMarginBottom">
                <h4>고객센터</h4>
                <div>
                    자주하는 질문{" "}
                    <Link to="/user/qna">
                        <Icon iconName="toggleTo" />
                    </Link>
                </div>
                <div>
                    공지사항{" "}
                    <Link to="/user/notice">
                        <Icon iconName="toggleTo" />
                    </Link>
                </div>
            </div>
            <EventSwiper className=" cntMarginBottom" />
        </>
    );
}

export default UserMypage;
