import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import loginSlice, { loginPostAsync } from "../../store/slice/loginSlice";

const useCustomLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginState = useSelector((state) => state.loginSlice);

    const isLogin = loginState.email ? true : false;

    const doLogin = async (loginParam) => {
        const action = await dispatch(loginPostAsync(loginParam));
        return action.payload;
    };

    const moveToPath = (path) => {
        navigate({ pathname: path }, { replace: true });
    };

    const moveToLogin = () => {
        navigate({ pathname: "/member/login" }, { replace: true });
    };

    const moveToLoginReturn = () => {
        return <Navigate replace to="/member/login" />;
    };

    return {
        loginState,
        isLogin,
        doLogin,
        moveToPath,
        moveToLogin,
        moveToLoginReturn,
    };
};

export default useCustomLogin;
