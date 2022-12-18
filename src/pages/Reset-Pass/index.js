import React from "react";
import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import "./style.css";
import "../../index.css";

export default function Reset() {
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
          <div className="container col-5" style={{ marginTop: "6rem" }}>
            <div className="text-primary mb-4">
              <h4 style={{ marginLeft: "11rem", fontWeight: "bold" }}>
                Reset Password
              </h4>
            </div>
            <div className="mb-4">
              <h5>Please Change The New Password!</h5>
            </div>
            <div>
              <h5 className="text-secondary">Change Password</h5>
              <input
                type="password"
                className="form-control"
                placeholder="New Password"
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
                Change Password
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
