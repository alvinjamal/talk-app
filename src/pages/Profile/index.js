/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";
import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./profile.module.css";
import { Link } from "react-router-dom";
import { FaRegBell, FaLock } from "react-icons/fa";
import { BsFolder2Open, BsFillChatSquareTextFill } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Image from "../../img/img1.png";
import { Button } from "react-bootstrap";

function Profile() {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [profile, setProfile] = useState([]);
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const navigate = useNavigate();
  let getProfile = `${process.env.REACT_APP_URL_BASE}/users/detail`;
  useEffect(() => {
    axios
      .get(getProfile, user)
      .then((res) => {
        console.log("Get profile success");
        console.log(res.data.data[0]);
        setProfile(res.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
        console.log("Get profile fail");
      });
  }, []);
  useEffect(() => {
    const resultSocket = io(`${process.env.REACT_APP_URL_BASE}`);
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
  const logout = () => {
    localStorage.clear();
    Swal.fire({
      title: "Logout Success",
      text: `Wait Loading To Login`,
      icon: "success",
      timer: "3000",
      showConfirmButton: false,
    }).then(() => {
      navigate("/Login");
    });
  };
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-md-3 ">
            <Link to="/chat-list">
              <h5 style={{ color: "#7E98DF" }}>Back</h5>
            </Link>
            <img
              src={profile.photo}
              alt=""
              className="mt-3 rounded-4"
              style={{ height: "70px", width: "70px" }}
            />
            <h4 className="mt-3">{profile.name_user}</h4>
            <h6 className="mt-2 text-secondary">@{profile.username}</h6>
            <h6 className="mt-2 text-secondary">{profile.bio}</h6>
            <h6 className="text-start mb-3 mt-4">Account</h6>
            <h6 className="text-start">{profile.phone}</h6>
            <hr />
            <h6 className="text-start">@{profile.username}</h6>
            <h6 className="text-start text-secondary">Username</h6>
            <hr />
            <h6 className="text-start  mt-4">{profile.bio}</h6>
            <h6 className="text-start text-secondary mb-4">Bio</h6>
            <h5 className="text-start">Setting</h5>
            <h6 className="text-start my-3">
              {" "}
              <FaRegBell /> Notification and Sounds
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <FaLock /> Privaty and Security
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <BsFolder2Open /> Data and Stronge
            </h6>
            <h6 className="text-start my-3">
              {" "}
              <BsFillChatSquareTextFill /> Chat settings
            </h6>
            <Button
              className="text-light"
              style={{ marginRight: "18rem" }}
              size="lg"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
          <div className="col-md-9" style={{ backgroundColor: "#FAFAFA" }}>
            <div className="row bg-white">
              <div className="col-1 ms-4 mt-4 mb-4">
                <img src={Image} alt="" />
              </div>
              <div className="col-3" style={{ marginTop: "35px" }}>
                <h6 style={{ marginRight: "10rem" }}>Theresa Webb</h6>
                <h6
                  style={{
                    color: "#7E98DF",
                    marginRight: "220px",
                    fontSize: "13px",
                  }}
                >
                  Online
                </h6>
              </div>
            </div>
            <ul>
              {messages.map((item, index) => (
                <li key={index + 1}>
                  {item.message} - {item.date}
                </li>
              ))}
            </ul>
            <div className="bottom-input">
              <div className="row ">
                <div className="col-11">
                  <input
                    type="text"
                    value={message}
                    name="message"
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: "60rem",
                      height: "40px",
                      marginLeft: "3rem",
                      backgroundColor: "#f5f5f5",
                    }}
                    className="form-control"
                  />
                </div>
                <div className="col-1 mb-5">
                  <button
                    onClick={handleMessage}
                    style={{
                      color: "white",
                      backgroundColor: "#7E98DF",
                    }}
                    className="btn"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
