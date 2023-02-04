import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../index.css";
import { loginUser } from "../../redux/actions/login";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "../../img/google.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };
    dispatch(loginUser(data, navigate));
  };

  return (
    <div>
      <div
        className="border"
        style={{
          height: "38rem",
          marginTop: "10%",
          marginLeft: "20%",
          borderRadius: "15px",
        }}
      >
        <div className="row">
          <div className="container mt-5 col-7">
            <div className="text-primary mb-4">
              <h4
                style={{
                  fontWeight: "bold",
                  color: "#7E98DF",
                }}
              >
                Login
              </h4>
            </div>
            <div className="text-center mb-4">
              <h5>Hi, Welcome back! </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-9 mt-4 ">
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
                <h5 className="text-start text-secondary">Password</h5>
                <input
                  type="password"
                  className="form-control mb-2"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  style={{ height: "45px", width: "30rem" }}
                />
                <Button
                  type="submit"
                  className="btn text-white rounded-5 mt-3"
                  style={{
                    backgroundColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                  }}
                >
                  Login
                </Button>
              </Form>
              <h6 className="my-4">Login with</h6>
              <button
                className="btn btn-new rounded-5 mt-3 mb-5"
                style={{
                  borderColor: "#7E98DF",
                  color: "#7E98DF",
                  width: "300px",
                  height: "50px",
                }}
              >
                <img src={Icon} alt="" className="me-3" />
                Google
              </button>
              <Link
                to="/Register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <h6 className="mb-4">
                  Don’t have an account?{" "}
                  <h6 style={{ color: "#7E98DF" }}>Sign Up</h6>
                </h6>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
