import React from "react";
import { Button } from "react-bootstrap";
import "../../index.css";
// import Logo from "../../img/toko.png";

export default function Register() {
  return (
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
        <div className="container mt-5 col-5 ">
          <div className="text-primary mb-4">
            <h3 style={{ marginLeft: "11rem", fontWeight: "bold" }}>
              Register
            </h3>
          </div>
          <div className="mb-4">
            <h5>Let’s create your account!</h5>
          </div>
          <div>
            <h5>Name</h5>
            <input
              type="name"
              className="form-control mb-2"
              placeholder="Full Name"
              aria-label="name"
              aria-describedby="basic-addon1"
              style={{ height: "45px", width: "30rem" }}
            />
          </div>
          <div>
            <h5>E-mail</h5>
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Email"
              aria-label="email"
              aria-describedby="basic-addon1"
              style={{ height: "45px", marginTop: "14px", width: "30rem" }}
            />
          </div>
          <div>
            <h5>Password</h5>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              aria-label="password"
              aria-describedby="basic-addon1"
              style={{ height: "45px", marginTop: "14px", width: "30rem" }}
            />
          </div>
        </div>
      </div>
      <div>
        <Button
          href="Login"
          className="btn3 btn-lg btn-round text-light"
          style={{
            marginLeft: "25rem",
            marginTop: "1rem",
            borderRadius: "10px",
            height: "50px",
            width: "21rem",
          }}
          variant="primary"
        >
          Register
        </Button>
      </div>
    </div>
  );
}
