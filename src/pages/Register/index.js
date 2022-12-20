import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../index.css";
import { RegisterUser } from "../../redux/actions/register";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function Register() {
  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const postData = (e) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(password);
    let data = {
      fullname,
      email,
      password,
    };
    dispatch(RegisterUser(data, navigate));
    Swal.fire("Success", "Register Success", "success");
  };

  return (
    <div>
      <div
        className="border"
        style={{
          height: "30rem",
          marginTop: "6rem",
          marginLeft: "17rem",
          borderRadius: "15px",
        }}
      >
        <div className="row">
          <div className="container mt-5 col-7">
            <div className="text-primary mb-4">
              <h4 style={{ marginLeft: "19rem", fontWeight: "bold" }}>
                Register{" "}
              </h4>
            </div>
            <div className=" mb-4" style={{ marginLeft: "9rem" }}>
              <h5>Hi, Welcome back! </h5>
            </div>
            <div className="input ">
              <Form onSubmit={postData} className="container mb-3 col-8 mt-4 ">
                <h5>Name</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  name="name"
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                  placeholder="Full Name"
                  style={{ height: "45px", width: "30rem" }}
                />
                <h5>E-mail</h5>
                <input
                  type="email"
                  className="form-control mb-2"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  style={{ height: "45px", width: "30rem" }}
                />
                <h5>Password</h5>
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
                  className="btn btn-primary text-white mt-3"
                  style={{
                    position: "absolute",
                    width: "20rem",
                    height: "47px",
                    marginLeft: "3rem",
                    borderRadius: "10px",
                  }}
                >
                  Register
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
