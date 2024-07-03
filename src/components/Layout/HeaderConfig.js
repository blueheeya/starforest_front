import { HeaderType, HeaderType1, HeaderType2 } from "./Header";
const headerConfig = {
    "/": { title: "홈", component: HeaderType },
    "/camp/list": {
        title: "캠핑장",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/list/map": {
        title: "캠핑장",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/view": {
        title: "캠핑장",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/view/map": {
        title: "캠핑장 보기 지도",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/reservation": {
        title: "캠프장 예약하기",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/pay": {
        title: "캠프장 예약하기",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/pay/complete": {
        title: "예약 완료",
        component: HeaderType1,
        titleStore: false,
    },
    "/diary/list": {
        title: "별숲 기록",
        component: HeaderType1,
        titleStore: false,
    },
    "/diary/write": {
        title: "별숲 기록",
        component: HeaderType2,
        titleStore: false,
    },
    "/diary/view": {
        title: "별숲 기록",
        component: HeaderType2,
        titleStore: false,
    },
    "/store/list": {
        title: "별숲 스토어",
        component: HeaderType1,
        titleStore: false,
    },
    "/store/view": {
        title: "별숲 스토어",
        component: HeaderType2,
        titleStore: true,
    },
    "/store/pay": {
        title: "스토어 결제",
        component: HeaderType2,
        titleStore: false,
    },
    "/store/pay/complete": {
        title: "스토어 결제하기",
        component: HeaderType1,
        titleStore: true,
    },
    "/user/mypage": {
        title: "마이페이지",
        component: HeaderType1,
        titleStore: false,
    },
    "/user/mypage/management": {
        title: "내 정보 관리",
        component: HeaderType1,
        titleStore: false,
    },
    "/user/camp/reservation/list": {
        title: "예약 내역",
        component: HeaderType2,
        titleStore: false,
    },
    "/user/camp/reservation/view": {
        title: "예약 내역",
        component: HeaderType2,
        titleStore: false,
    },
    "/user/camp/like/list": {
        title: "캠핑장 찜 목록",
        component: HeaderType2,
        titleStore: false,
    },
    "/user/diary/list": {
        title: "별숲 기록",
        component: HeaderType2,
        titleStore: false,
    },
    "user/store/order/list": {
        title: "주문/배송",
        component: HeaderType2,
        titleStore: false,
    },
    "user/store/order/view": {
        title: "주문/배송",
        component: HeaderType2,
        titleStore: false,
    },
    "user/store/cart/list": {
        title: "장바구니",
        component: HeaderType2,
        titleStore: false,
    },
    "user/store/review/list": {
        title: "나의 리뷰",
        component: HeaderType2,
        titleStore: false,
    },
    "/user/notice": {
        title: "공지사항",
        component: HeaderType2,
        titleStore: false,
    },
    "/user/qna": {
        title: "자주하는 질문",
        component: HeaderType2,
        titleStore: false,
    },
};

export default headerConfig;
