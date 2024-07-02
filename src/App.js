import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/style.scss";
import { BackWrap } from "./components/Layout/BackWrap";
import Container from "./components/Layout/Container";
import ContentWrap from "./components/Layout/ContentWrap";
import Footer from "./components/Layout/Footer";
import { HeaderType, HeaderType2 } from "./components/Layout/Header";
import headerConfig from "./components/Layout/HeaderConfig";
import Menu from "./components/Layout/Menu";
import CampList from "./page/Camp/CampList";
import CampListMap from "./page/Camp/CampListMap";
import CampView from "./page/Camp/CampView";
import CampViewMap from "./page/Camp/CampViewMap";
import DiaryList from "./page/Diary/DiaryList";
import Home from "./page/Home";
import StoreList from "./page/Store/StoreList";
import StoreView from "./page/Store/StoreView";
import UserMypage from "./page/User/UserMypage";

const showMenuPath = ["/", "/diary/list", "/store/list", "/user/mypage"];
const showFooterPath = ["/", "/store/view"];
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
    const isHeaderType2 = HeaderComponent === HeaderType2;
    return (
        <BackWrap>
            <Container>
                <HeaderComponent titleStore={titleStore}>
                    {title}
                </HeaderComponent>
                <ContentWrap className={`${isHeaderType2 ? "cntTop" : ""} `}>
                    <main>
                        <Outlet />
                    </main>
                </ContentWrap>
                {showFooter && (
                    <Footer className={`${showMenu ? "cntBottom" : ""}`} />
                )}
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
