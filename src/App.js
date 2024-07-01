import { Outlet, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import { BackWrap } from "./components/Layout/BackWrap";
import Container from "./components/Layout/Container";
import Menu from "./components/Layout/Menu";
import DiaryList from "./page/Diary/DiaryList";
import Home from "./page/Home";
import StoreList from "./page/Store/StoreList";
import UserMypage from "./page/User/UserMypage";
function Layout() {
    return (
        <BackWrap>
            <Container>
                <main>
                    <Outlet />
                </main>
            </Container>
            <Menu />
        </BackWrap>
    )
}
function App() {
  return (
    <>
        
            <Routes >
                <Route path="/" element={<Layout />}>
                    <Route path="/" index element={<Home />}></Route>
                    <Route path="/diary/list" index element={<DiaryList />}></Route>
                    <Route path="/store/list" index element={<StoreList />}></Route>
                    <Route path="/user/mypage" index element={<UserMypage />}></Route>
                </Route>
            </Routes>
    </>
  );
}

export default App;
