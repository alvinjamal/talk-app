import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Img from "../../img/img8.png";
import Bell from "../../img/Union.png";
// import "./style.css";

export default function Profile() {
  return (
    <Row>
      <Col style={{ width: "20%" }}>
        <div>
          <div className="container">
            <div className="wrap mt-4" style={{ marginLeft: "6rem" }}>
              <div className="row text-primary">
                <div className="chat mt-4">
                  <Button className="text-dark mt-3 " variant="outline-light">
                    <img
                      src={Img}
                      alt=""
                      width={65}
                      height={60}
                      style={{ borderRadius: "5px", marginRight: "rem" }}
                    />
                    <div className="name mt-3">
                      <h3>Alvin Jamal Azkya</h3>
                      <p className="tag text-secondary">@vinn</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <div className="account" style={{ marginLeft: "2rem" }}>
              <h4 style={{ marginLeft: "2rem", fontWeight: "bold" }}>
                Account
              </h4>
              <h5 className="mt-3">083816767374</h5>
              <p>Tap to change phone number</p>
            </div>
            <div
              className="mt-4"
              style={{ borderBottom: "1px solid", width: "30rem" }}
            />
            <div className="user mt-4" style={{ marginLeft: "2rem" }}>
              <h5 style={{ fontWeight: "bold" }}>@vin</h5>
              <p>Username</p>
            </div>
            <div
              className="mt-4"
              style={{ borderBottom: "1px solid", width: "30rem" }}
            />
            <div className="mt-4" style={{ marginLeft: "2rem" }}>
              <h6 style={{ fontWeight: "bold" }}>
                I’m Senior Frontend Developer from Microsoft
              </h6>
              <p className="paraf text-secondary">Bio:</p>
            </div>
            <div className="account mb-4 mt-4" style={{ marginLeft: "2rem" }}>
              <h4 style={{ marginLeft: "2rem", fontWeight: "bold" }}>
                Setting
              </h4>
              <img src={Bell} alt="" />
              <Button variant="outline-light text-dark">
                Notification and Sounds
              </Button>
              <div>
                <Button variant="outline-light text-dark">
                  Privaty and Security
                </Button>
              </div>
              <div>
                <Button variant="outline-light text-dark">
                  Data and Stronge
                </Button>
              </div>
              <div>
                <Button variant="outline-light text-dark">Chat settings</Button>
              </div>
              <div>
                <Button variant="outline-light text-dark">Devices</Button>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col></Col>
    </Row>
  );
}
