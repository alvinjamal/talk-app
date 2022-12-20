import axios from "axios";

export const VerifOtpUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post(
      "http://localhost:4000/users/Verif-Otp",
      data
    );
    const otp = result.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: otp });
    navigate("/Login");
    console.log(" Verification Otp Success");
  } catch (err) {
    console.log(" Verification Otp Err");
    console.log(err);
  }
};
