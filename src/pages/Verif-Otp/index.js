import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./verif.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VerifOtpUser } from "../../redux/actions/otp";
import Icon from "../../img/google.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      email,
      otp,
    };
    dispatch(VerifOtpUser(data, navigate));
  };

  return (
    <div className="body">
      <div
        className="border"
        style={{
          height: "38rem",
          marginTop: "10%",
          marginLeft: "20%",
          borderRadius: "15px",
        }}
      >
        <Button variant="outline-primary" size="lg" href="/Register">
          <div>
            <h6>Back To Register</h6>
          </div>
        </Button>
        <div className="row">
          <div className="container mt-5 col-7">
            <div className="text-primary mb-4">
              <h4 style={{ fontWeight: "bold", color: "#7E98DF" }}>
                Verification Otp
              </h4>
            </div>
            <div className=" mb-4">
              <h5>Hi,Please fill in the OTP verification from the email</h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-4 ">
                <h5 className="text-start text-secondary">E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ height: "45px", width: "30rem" }}
                />
                <h5 className="text-start text-secondary">Otp</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Code Otp"
                  style={{ height: "45px", width: "30rem" }}
                />
                <Button
                  type="submit"
                  className="btn btn-new rounded-5 mt-3 mb-3 text-white"
                  style={{
                    borderColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                    marginLeft: "3rem",
                  }}
                >
                  Verification Otp
                </Button>
              </Form>
              <h6 className="my-4" style={{ marginLeft: "3rem" }}>
                Verification Otp With
              </h6>
              <button
                className="btn btn-new rounded-5 mt-3 mb-5"
                style={{
                  borderColor: "#7E98DF",
                  color: "#7E98DF",
                  width: "300px",
                  height: "50px",
                  marginLeft: "3rem",
                }}
              >
                <img src={Icon} alt="" className="me-3" />
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
