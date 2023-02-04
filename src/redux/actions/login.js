import axios from "axios";
import Swal from "sweetalert2";

export const loginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({ type: "USER_LOGIN_PENDING" });
    const result = await axios.post(`http://localhost:3030/users/login`, data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    dispact({ type: "USER_LOGIN_SUCCESS", payload: user });
    Swal.fire({
      title: "Login Success",
      text: "Good successfully Login",
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      navigate("/Profile");
    });
  } catch (err) {
    Swal.fire({
      title: "Login Failed",
      text: "Please login again using the correct email and password",
      icon: "error",
      timer: "3000",
      showConfirmButton: false,
    });
  }
};
