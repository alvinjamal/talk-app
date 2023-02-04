import axios from "axios";
import Swal from "sweetalert2";

export const VerifOtpUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_OTP_PENDING" });
    const result = await axios.post("http://localhost:3030/users/verif", data);
    const otp = result.data.data;
    dispatch({ type: "USER_OTP_SUCCESS", payload: otp });
    Swal.fire({
      title: "Verification Otp Success",
      text: "Successfully Verification Otp",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      navigate("/Login");
    });
  } catch (err) {
    Swal.fire({
      title: "Verification Otp Failed",
      text: "Please Verification Otp again using the correct Code Otp",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
