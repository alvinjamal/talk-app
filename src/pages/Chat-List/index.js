import React from "react";
import { Button, Row, Col, Dropdown } from "react-bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Img1 from "../../img/img1.png";
import Img2 from "../../img/dut.png";
import Img3 from "../../img/img3.png";
import Img4 from "../../img/img4.png";
import Img5 from "../../img/img5.png";
import Img6 from "../../img/img6.png";

export default function ChatList() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const resultSocket = io("http://localhost:4000");
    setSocket(resultSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("messageBe", (data) => {
        setMessages((current) => [...current, data]);
      });
    }
  }, [socket]);

  const handleMessage = () => {
    socket.emit("message", message);
    setMessage("");
  };
  return (
    <Row>
      <Col>
        <div style={{ width: "50rem" }}>
          <div className="container">
            <div className="wrap mt-4" style={{ marginLeft: "2rem" }}>
              <div className="row text-primary">
                <Dropdown style={{ marginLeft: "16rem" }}>
                  <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    ---
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Setting</Dropdown.Item>
                    <Dropdown.Item href="#/Profile">Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Calls</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Save Messages
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Invite Friends
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Telegram FAQ
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <h2 className="tele">Talk App</h2>
              </div>
              <div className="icon col-3 mt-4">
                <input
                  src={Img1}
                  alt=""
                  width={10}
                  height={10}
                  type="search"
                  className="form-control"
                  placeholder="Type Your Message"
                  style={{
                    height: "48px",
                    marginTop: "14px",
                    width: "40rem",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="row">
                <div className="d-flex  mt-3">
                  <Button className="text text-dark" variant="outline-light">
                    All
                  </Button>

                  <Button className="sort text-dark" variant="outline-light">
                    Important
                  </Button>

                  <Button className="sort text-dark" variant="outline-light">
                    Unread
                  </Button>
                </div>
                <div>
                  <div
                    className="chat mt-3"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img1}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Theresa Webb</h5>
                        <p>Why did you do that?</p>
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="chat mt-1"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img2}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Calvin Flores</h5>
                        <p>Hi, bro! Come to my house!</p>
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="chat mt-1"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img3}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Gregory Bell</h5>
                        <p>Will you stop ignoring me?</p>
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="chat mt-1"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img4}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Soham Henry</h5>
                        <p>Me: Bro, just fuck off</p>
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="chat mt-1"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img5}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Mother ❤</h5>
                        <p>Me: Yes, of course come, ... </p>
                      </div>
                    </Button>
                  </div>
                </div>
                <div>
                  <div
                    className="chat mt-1"
                    style={{
                      border: "2px solid aliceblue",
                      width: "25rem",
                    }}
                  >
                    <img
                      src={Img6}
                      alt=""
                      width={55}
                      height={50}
                      style={{ borderRadius: "10px", marginRight: "1rem" }}
                    />
                    <Button
                      className="text-dark text-start mt-3"
                      variant="outline-light"
                    >
                      <div>
                        <h5>Brother</h5>
                        <p>Ok. Good bay!</p>
                      </div>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col
        className="text-start"
        style={{ width: "100rem", backgroundColor: "#f5f5f5" }}
      >
        <div>
          <div>
            <img
              src={Img6}
              alt=""
              width={55}
              height={50}
              style={{
                borderRadius: "10px",
                marginTop: "10rem",
              }}
            />
            <Button
              className="text-dark "
              variant="outline-light"
              style={{ marginTop: "11rem" }}
            >
              <div>
                <h5>Alvin Jamal Azkya</h5>
                <p className="text-start">Online</p>
              </div>
            </Button>
          </div>
          <div className="App" style={{ marginTop: "10rem" }}>
            <ul>
              {messages.map((item, index) => (
                <li key={index + 1}>
                  {item.message} - {item.date}
                </li>
              ))}
            </ul>
            <input
              type="text"
              value={message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              style={{ borderRadius: "5px" }}
            />
            <br />
            <Button
              onClick={handleMessage}
              style={{ marginTop: "8px", width: "8rem" }}
            >
              Send
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
}
