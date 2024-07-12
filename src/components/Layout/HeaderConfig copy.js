import { HeaderType, HeaderType1, HeaderType2, HeaderType3 } from "./Header";
const headerConfig = [
    {
        pattern: /^\//,
        config: {
            title: "캠핑장",
            component: HeaderType,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/list\/\d+$/,
        config: {
            title: "캠핑장",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/view\/\d+$/,
        config: {
            title: "캠핑장",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/list\/map\/\d+$/,
        config: {
            title: "캠핑장",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/view\/map\/\d+$/,
        config: {
            title: "캠핑장",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/reservation\/\d+$/,
        config: {
            title: "캠프장 예약하기",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/pay\/\d+$/,
        config: {
            title: "캠프장 예약하기",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/camp\/pay\/complete\/\d+$/,
        config: {
            title: "예약 완료",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/diary\/list\/\d+$/,
        config: {
            title: "별숲 기록",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/diary\/list\/\d+$/,
        config: {
            title: "별숲 기록",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/diary\/write\/\d+$/,
        config: {
            title: "별숲 기록",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/diary\/view\/\d+$/,
        config: {
            title: "별숲 기록",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/store\/list\/\d+$/,
        config: {
            title: "별숲 스토어",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/store\/view\/\d+$/,
        config: {
            title: "별숲 스토어",
            component: HeaderType2,
            titleStore: true,
        },
    },
    {
        pattern: /^\/store\/pay\/\d+$/,
        config: {
            title: "스토어 결제",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/store\/pay\/complete\/\d+$/,
        config: {
            title: "스토어 결제하기",
            component: HeaderType1,
            titleStore: true,
        },
    },
    {
        pattern: /^\/user\/mypage\/\d+$/,
        config: {
            title: "마이페이지",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/mypage\/management\/\d+$/,
        config: {
            title: "내 정보 관리",
            component: HeaderType1,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/camp\/reservation\/list\/\d+$/,
        config: {
            title: "예약 내역",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/camp\/reservation\/list\/view\/\d+$/,
        config: {
            title: "예약 내역",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/camp\/like\/list\/\d+$/,
        config: {
            title: "캠핑장 찜 목록",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/diary\/list\/\d+$/,
        config: {
            title: "별술 기록",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/store\/order\/list\/\d+$/,
        config: {
            title: "주문/배송",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/store\/order\/view\/\d+$/,
        config: {
            title: "주문/배송",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/store\/cart\/list\/\d+$/,
        config: {
            title: "장바구니",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/store\/review\/list\/\d+$/,
        config: {
            title: "나의 리뷰",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/notice\/\d+$/,
        config: {
            title: "공지사항",
            component: HeaderType2,
            titleStore: false,
        },
    },
    {
        pattern: /^\/user\/qna\/\d+$/,
        config: {
            title: "자주하는 질문",
            component: HeaderType2,
            titleStore: false,
        },
    },
];

export default headerConfig;
