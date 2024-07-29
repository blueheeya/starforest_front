import axios from "axios";
const host = `${process.env.REACT_APP_SERVER_URL}api/member/login`;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL
});


export default axiosInstance;
