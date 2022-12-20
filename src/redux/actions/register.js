import axios from "axios";

export const RegisterUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      "http://localhost:4000/users/Register",
      data
    );
    const user = result.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    navigate("/Verif-Otp");
    console.log("Register Success");
  } catch (err) {
    console.log("Register Fail");
    console.log(err);
  }
};
