import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/style.scss";
import { BackWrap } from "./components/Layout/BackWrap";
import Container from "./components/Layout/Container";
import Menu from "./components/Layout/Menu";
import DiaryList from "./page/Diary/DiaryList";
import Home from "./page/Home";
import StoreList from "./page/Store/StoreList";
import StoreView from "./page/Store/StoreView";
import UserMypage from "./page/User/UserMypage";
import CampList from "./page/Camp/CampList";
import CampListMap from "./page/Camp/CampListMap";
import CampView from "./page/Camp/CampView";
import CampViewMap from "./page/Camp/CampViewMap";
import {
    HeaderType,
    HeaderType1,
    HeaderType2,
} from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
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
const showMenuPath = ["/", "/diary/list", "/store/list", "/user/mypage"];
const showFooterPath = ["/"];
function LayoutType() {
    const location = useLocation();
    const {
        title,
        component: HeaderComponent,
        titleStore,
    } = headerConfig[location.pathname] || {
        title: "홈",
        component: HeaderType,
        titleStore: false,
    };
    const showMenu = showMenuPath.includes(location.pathname);
    const showFooter = showFooterPath.includes(location.pathname);
    return (
        <BackWrap>
            <Container>
                <HeaderComponent titleStore={titleStore}>
                    {title}
                </HeaderComponent>
                <main>
                    <Outlet />
                </main>
                {showFooter && <Footer />}
                {showMenu && <Menu />}
            </Container>
        </BackWrap>
    );
}
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LayoutType />}>
                    <Route path="/" index element={<Home />}></Route>
                    <Route
                        path="/diary/list"
                        index
                        element={<DiaryList />}
                    ></Route>
                    <Route
                        path="/store/list"
                        index
                        element={<StoreList />}
                    ></Route>
                    <Route
                        path="store/view"
                        index
                        element={<StoreView />}
                    ></Route>
                    <Route
                        path="/user/mypage"
                        index
                        element={<UserMypage />}
                    ></Route>
                    <Route path="/camp/list" element={<CampList />}></Route>
                    <Route
                        path="/camp/list/map"
                        element={<CampListMap />}
                    ></Route>
                    <Route path="/camp/view" element={<CampView />}></Route>
                    <Route
                        path="/camp/view/map"
                        index
                        element={<CampViewMap />}
                    ></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
