import React from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./style.css";
import "../../index.css";

export default function Login() {
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
          <div className="container mt-5 col-5">
            <div className="text-primary mb-4">
              <h4 style={{ marginLeft: "11rem", fontWeight: "bold" }}>
                Login{" "}
              </h4>
            </div>
            <div className="mb-4">
              <h6>Hi, Welcome back! </h6>
            </div>
            <div>
              <h5 className="text-secondary">E-mail</h5>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="email"
                aria-describedby="basic-addon1"
                style={{ height: "48px", marginTop: "14px", width: "30rem" }}
              />
              <h5 className="text-secondary">Password</h5>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
                aria-describedby="basic-addon1"
                style={{ height: "48px", marginTop: "14px", width: "30rem" }}
              />
            </div>
            <div>
              <Button
                href="Chat-List"
                className="btn3 btn-lg btn-round text-light"
                style={{
                  marginLeft: "4rem",
                  marginTop: "1rem",
                  borderRadius: "10px",
                  height: "50px",
                  width: "21rem",
                }}
                variant="primary"
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
