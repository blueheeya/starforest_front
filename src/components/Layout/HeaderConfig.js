import { HeaderType, HeaderType1, HeaderType2 } from "./Header";
const headerConfig = {
    "/": { title: "홈", component: HeaderType },
    "/diary/list": {
        title: "별숲 기록",
        component: HeaderType1,
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
    "/user/mypage": {
        title: "내 정보",
        component: HeaderType1,
        titleStore: false,
    },
    "/camp/list": {
        title: "캠프 목록",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/list/map": {
        title: "캠프 목록 지도",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/view": {
        title: "캠프 보기",
        component: HeaderType2,
        titleStore: false,
    },
    "/camp/view/map": {
        title: "캠프 보기 지도",
        component: HeaderType2,
        titleStore: false,
    },
};

export default headerConfig;
