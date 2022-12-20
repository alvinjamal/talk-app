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
import Icon1 from "../../img/icon1.png";
import Icon2 from "../../img/icon2.png";
import Icon3 from "../../img/icon3.png";

export default function Home() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  const [group, setGroup] = useState("global");
  const [name, setName] = useState("guest");

  useEffect(() => {
    const resultSocket = io("http://localhost:4000");
    setSocket(resultSocket);
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("initialRoom", { room: group });
    }
    setMessages([]);
  }, [group]);

  useEffect(() => {
    if (socket) {
      let data = { message, name, group };
      console.log(data);
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
                <div
                  className="create container m-4 text-center"
                  style={{
                    width: "18rem",
                    height: "3rem",
                    marginLeft: "1rem",
                    backgroundColor: "blue",
                    borderRadius: "10px",
                  }}
                >
                  <div>
                    <Button className="icon mt-1" variant="primary">
                      <img src={Icon1} alt="" />
                    </Button>
                    <Button className="icon mt-1" variant="primary">
                      <img src={Icon2} alt="" />
                    </Button>
                    <Button className="icon mt-1" variant="primary">
                      <img src={Icon3} alt="" />
                    </Button>
                  </div>
                </div>
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
                    width: "40srem",
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
                <h5>Brother</h5>
                <p className="text-start">Online</p>
              </div>
            </Button>
          </div>
          <div className="App container-5" style={{ marginTop: "10rem" }}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {group}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setGroup("global")}>
                  global
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGroup("Calvin Flores")}>
                  Calvin Flores
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setGroup("Theresa Webb")}>
                  Theresa Webb
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <input
              className="mt-2"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
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
