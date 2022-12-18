import axios from "axios";

export const LoginUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`${process.env.API}`, data);
    const user = result.data;
    localStorage.setItem("token", user.token);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    navigate("/Chat-List");
    console.log("Login Success");
  } catch (err) {
    console.log("Login Fail");
    console.log(err);
  }
};
