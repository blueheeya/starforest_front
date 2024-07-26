import axios from "axios";
const host = `${process.env.REACT_APP_SERVER_URL}/api/member/login`;

export const loginPost = async (loginParam) => {
  const header = { headers: { "Content-Type": "x-www-form-urlencoded" } };
  const form = new FormData();
  form.append("username", loginParam.email);
  form.append("password", loginParam.password);

  const res = await axios.post(host, form, header);

  return res.data;
};
