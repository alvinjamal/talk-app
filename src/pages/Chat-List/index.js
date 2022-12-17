import React from "react";
import { Button, Row, Col, Dropdown } from "react-bootstrap";
import "./style.css";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Alvin from "../../img/alvin.jpeg";
// import Add from "../../img/add.png";
// import Avatar from "react-avatar";

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
        <div>
          <div className="container">
            <div className="wrap mt-4" style={{ marginLeft: "2rem" }}>
              <div className="row text-primary">
                <Dropdown style={{ marginLeft: "16rem" }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                <h1 className="tele">Telegram</h1>
              </div>
              <div className="icon col-3 mt-4">
                <input
                  src={Alvin}
                  alt=""
                  width={10}
                  height={10}
                  type="search"
                  className="form-control"
                  placeholder="Type Your Message"
                  style={{
                    height: "48px",
                    marginTop: "14px",
                    width: "25rem",
                    borderRadius: "10px",
                  }}
                />
              </div>
              <div className="row">
                <div className="d-flex  mt-3">
                  <Button
                    className="text text-dark"
                    style={{ fontWeight: "bold" }}
                    variant="outline-light"
                  >
                    All
                  </Button>

                  <Button
                    className="sort text-dark"
                    style={{ fontWeight: "bold" }}
                    variant="outline-light"
                  >
                    Important
                  </Button>

                  <Button
                    className="sort text-dark"
                    style={{ fontWeight: "bold" }}
                    variant="outline-light"
                  >
                    Unread
                  </Button>
                </div>
                <div className="chat mt-4">
                  <img
                    src={Alvin}
                    alt=""
                    width={55}
                    height={50}
                    style={{ borderRadius: "10px", marginRight: "1rem" }}
                  />
                  <Button className="text-dark mt-3" variant="outline-light">
                    <div>
                      <h5>Alvin Jamal Azkya</h5>
                      <p>Why did you do that?</p>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col>
        <div className="App mt-5">
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
          />
          <br />
          <button onClick={handleMessage}>tes</button>
        </div>
      </Col>
    </Row>
  );
}
