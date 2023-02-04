import React from "react";
import { Button } from "react-bootstrap";
import "./style.css";
// import { Link } from "react-router-dom";

export default function Forgot() {
  return (
    <div>
      <div
        className="border"
        style={{
          height: "30rem",
          marginTop: "12%",
          marginLeft: "20%",
          borderRadius: "15px",
        }}
      >
        <div className="row">
          <div className="container mt-5 col-5 ">
            <div className="text-primary mb-4">
              <h3 style={{ marginLeft: "8rem", fontWeight: "bold" }}>
                Forgot Password
              </h3>
            </div>
            <div className="mb-4">
              <h6>You’ll get messages soon on your E-mail </h6>
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
            </div>
            <div>
              <Button
                href="Reset-Pass"
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
                Send
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
