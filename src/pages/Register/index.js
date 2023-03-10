import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../index.css";
import { RegisterUser } from "../../redux/actions/register";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Icon from "../../img/google.png";

export default function Register() {
  const [name_user, setNameUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    let data = {
      name_user,
      email,
      password,
    };
    dispatch(RegisterUser(data, navigate));
  };

  return (
    <div classname="body">
      <div
        className="border"
        style={{
          height: "38rem",
          marginTop: "10%",
          marginLeft: "17%",
          borderRadius: "15px",
        }}
      >
        <div className="row">
          <div className="container mt-5 col-7">
            <div className="text-primary mb-4">
              <h4 style={{ fontWeight: "bold", color: "#7E98DF" }}>
                Register{" "}
              </h4>
            </div>
            <div className=" mb-4">
              <h5>Hi, Welcome back! </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-4 ">
                <h5 className="text-start text-secondary">Name</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="name"
                  value={name_user}
                  onChange={(e) => setNameUser(e.target.value)}
                  placeholder="Full Name"
                  style={{ height: "45px", width: "30rem" }}
                />
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
                  className="btn btn-new rounded-5 mt-3 mb-3 text-white"
                  style={{
                    borderColor: "#7E98DF",
                    width: "300px",
                    height: "50px",
                    marginLeft: "3rem",
                  }}
                >
                  Register
                </Button>
              </Form>
              <h6 className="my-4" style={{ marginLeft: "3rem" }}>
                Register with
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
