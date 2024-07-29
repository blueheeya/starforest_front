import axios from "axios";
const host = `${process.env.REACT_APP_SERVER_URL}api/member/login`;

export const loginPost = async (loginParam) => {
  let temp_email = loginParam.email
  let temp_password = loginParam.password
  const options = {
    headers: { "Content-Type": "x-www-form-urlencoded" },
    data: new FormData(),
  };
  options.data.append("username", temp_email);
  options.data.append("password", temp_password);

  try {
    const response = await axios.post(host, options.data, options);
    return response.data;
  } catch (error) {
    console.error('########### API error', error);
    throw error;
  }
};
