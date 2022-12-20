import { combineReducers } from "redux";
import userReducers from "./user";
import { VerifOtpUser } from "./otp";

const rootReducers = combineReducers({
  user: userReducers,
  VerifOtp: VerifOtpUser,
});

export default rootReducers;
