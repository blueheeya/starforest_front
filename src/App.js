import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import "./assets/css/style.scss";
import { BackWrap } from "./components/Layout/BackWrap";
import Container from "./components/Layout/Container";
import ContentWrap from "./components/Layout/ContentWrap";
import Footer from "./components/Layout/Footer";
import { HeaderType, HeaderType2 } from "./components/Layout/Header";
import headerConfig from "./components/Layout/HeaderConfig";
import Menu from "./components/Layout/Menu";
import Home from "./page/Home";
import CampList from "./page/Camp/CampList";
import CampListMap from "./page/Camp/CampListMap";
import CampView from "./page/Camp/CampView";
import CampViewMap from "./page/Camp/CampViewMap";
import CampReservation from "./page/Camp/CampReservation";
import CampReservationPay from "./page/Camp/CampReservationPay";
import CampReservationComplete from "./page/Camp/CampReservationComplete";
import DiaryList from "./page/Diary/DiaryList";
import DiaryView from "./page/Diary/DiaryView";
import DiaryWrite from "./page/Diary/DiaryWrite";
import StoreList from "./page/Store/StoreList";
import StoreView from "./page/Store/StoreView";
import StorePay from "./page/Store/StorePay";
import StorePayComplete from "./page/Store/StorePayComplete";
import UserMypage from "./page/User/UserMypage";
import UserMypageMent from "./page/User/UserMypageMent";
import CampReservationList from "./page/User/CampReservationList";
import CampReservationView from "./page/User/CampReservationView";
import CampLikeList from "./page/User/CampLikeList";
import MyDiaryList from "./page/User/MyDiaryList";
import StoreOrderList from "./page/User/StoreOrderList";
import StoreOrderView from "./page/User/StoreOrderView";
import StoreCartList from "./page/User/StoreCartList";
import StoreReviewList from "./page/User/StoreReviewList";
import Qna from "./page/User/Qna";
import Notice from "./page/User/Notice";
import Login from "./page/Member/Login";
import PwFind from "./page/Member/PwFind";
import Terms from "./page/Member/Terms";
import Register from "./page/Member/Register";
import Complete from "./page/Member/Complete";
import Style from "./Style";

const showMenuPath = ["/", "/diary/list", "/store/list", "/user/mypage"];
const showFooterPath = ["/", "/store/view", "/user/mypage"];
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
        <HeaderComponent titleStore={titleStore}>{title}</HeaderComponent>
        <ContentWrap className={`${isHeaderType2 ? "cntView" : ""} `}>
          <main>
            <Outlet />
          </main>
        </ContentWrap>
        {showFooter && (
          <Footer className={`${showMenu ? "footerBottom" : ""}`} />
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
          {/* camping  */}
          <Route path="/camp/list" element={<CampList />}></Route>
          <Route path="/camp/list/map" element={<CampListMap />}></Route>
          <Route path="/camp/view" element={<CampView />}></Route>
          <Route path="/camp/view/map" index element={<CampViewMap />}></Route>
          <Route
            path="/camp/reservation"
            index
            element={<CampReservation />}
          ></Route>
          <Route
            path="/camp/pay"
            index
            element={<CampReservationPay />}
          ></Route>
          <Route
            path="/camp/pay/complete"
            index
            element={<CampReservationComplete />}
          ></Route>
          {/* diary  */}
          <Route path="/diary/list" index element={<DiaryList />}></Route>
          <Route path="/diary/write" index element={<DiaryWrite />}></Route>
          <Route path="/diary/view" index element={<DiaryView />}></Route>
          {/* store  */}
          <Route path="/store/list" index element={<StoreList />}></Route>
          <Route path="store/view" index element={<StoreView />}></Route>
          <Route path="store/pay" index element={<StorePay />}></Route>
          <Route
            path="/store/pay/complete"
            index
            element={<StorePayComplete />}
          ></Route>
          {/* user  */}
          <Route path="/user/mypage" index element={<UserMypage />}></Route>
          <Route
            path="/user/mypage/management"
            index
            element={<UserMypageMent />}
          ></Route>
          <Route
            path="/user/camp/reservation/list"
            index
            element={<CampReservationList />}
          ></Route>
          <Route
            path="/user/camp/reservation/view"
            index
            element={<CampReservationView />}
          ></Route>
          <Route
            path="/user/camp/like/list"
            index
            element={<CampLikeList />}
          ></Route>
          <Route
            path="/user/diary/list"
            index
            element={<MyDiaryList />}
          ></Route>
          <Route
            path="/user/store/order/list"
            index
            element={<StoreOrderList />}
          ></Route>
          <Route
            path="/user/store/order/view"
            index
            element={<StoreOrderView />}
          ></Route>
          <Route
            path="/user/store/cart/list"
            index
            element={<StoreCartList />}
          ></Route>
          <Route
            path="/user/store/review/list"
            index
            element={<StoreReviewList />}
          ></Route>
          <Route path="/user/qna" index element={<Qna />}></Route>
          <Route path="/user/notice" index element={<Notice />}></Route>
          {/* member */}
          <Route path="/member/login" index element={<Login />}></Route>
          <Route path="/member/pwfind" index element={<PwFind />}></Route>
          <Route path="/member/terms" index element={<Terms />}></Route>
          <Route path="/member/register" index element={<Register />}></Route>
          <Route
            path="/member/register/complete"
            index
            element={<Complete />}
          ></Route>
          <Route path="/style" element={<Style />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
