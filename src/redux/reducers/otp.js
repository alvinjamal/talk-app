import axios from "axios";

export const VerifOtpUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post(`${process.env.REACT_API_OTP}`, data);
    const otp = result.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: otp });
    navigate.push("/Login");
    console.log(" Verification Otp Success");
  } catch (err) {
    console.log(" Verification Otp Err");
    console.log(err);
  }
};
