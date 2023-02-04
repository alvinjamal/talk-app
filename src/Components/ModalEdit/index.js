import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";

function ModalEdit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [putData, setPutData] = useState({
    username: data?.username,
    bio: data?.bio,
    phone: data?.phone,
  });
  const token = localStorage.getItem("token");
  const user = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const handleChange = (e) => {
    setPutData({
      ...putData,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };
  const handleData = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", putData.username);
    formData.append("bio", putData.bio);
    formData.append("phone", putData.phone);
    formData.append("photo", photo);
    console.log(formData);
    axios
      .put(`${process.env.REACT_APP_URL_BASE}/users/update`, formData, user, {
        "content type": "multipart/form-data",
      })
      .then((res) => {
        console.log("Update Profile Success");
        console.log(res);
        Swal.fire({
          title: "Update Profile Success",
          text: `Update Profile Success, Wait Refresh`,
          icon: "success",
          timer: "3000",
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.log("Update Profile Failed");
        console.log(err);
        Swal.fire("Warning", "Update Profile Failed", "error");
      });
  };
  return (
    <div>
      <>
        <button
          className="btn text-white my-4"
          style={{ backgroundColor: "#7E98DF" }}
          onClick={handleShow}
        >
          Edit Profile
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Username"
                  value={putData.username}
                  name="username"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="text"
                  className="form-control my-3"
                  placeholder="Bio"
                  value={putData.bio}
                  name="bio"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="number"
                  className="form-control my-3"
                  placeholder="Phone Number"
                  value={putData.phone}
                  name="phone"
                  onChange={(e) => handleChange(e)}
                />
                <input
                  type="file"
                  name="photo"
                  className="form-control my-3"
                  onChange={handlePhoto}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={(e) => handleData(e)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default ModalEdit;
