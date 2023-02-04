import axios from "axios";
import Swal from "sweetalert2";

export const RegisterUser = (data, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      "http://localhost:3030/users/register",
      data
    );
    const user = result.data.data;
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    Swal.fire({
      title: "Register Success",
      text: "Successfully Register",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      navigate("/Verif-Otp");
    });
  } catch (err) {
    Swal.fire({
      title: "Register Failed",
      text: "Please Register Again",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
