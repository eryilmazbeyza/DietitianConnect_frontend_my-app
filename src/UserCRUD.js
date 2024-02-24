import React, { useState, useEffect, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import AdminFooter from "./pages/AdminFooter";
import AdminMenu from "./pages/AdminMenu";

const UserCRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userName, setuserName] = useState("");
  const [passwordHash, setpasswordHash] = useState("");
  const [email, setemail] = useState("");
  const [birthDate, setbirthDate] = useState("");
  const [gender, setgender] = useState("");
  const [profilePicturePath, setprofilePicturePath] = useState("");

  const [editID, setEditId] = useState("");
  const [editUserName, setEditUserName] = useState("");
  const [editPasswordHash, setEditPasswordHash] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editBirthDate, setEditBirthDate] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editProfilePicturePath, setEditProfilePicturePath] = useState("");

  const userdata = [
    {
      userID: 1,
      userName: "Aisha Lil",
      passwordHash: "1234",
      email: "aisha@gmail.com",
      birthDate: "1995-10-10T00:00:00",
      gender: "Women",
      profilePicturePath: "aisha.png",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/User")
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEdit = (id) => {
    handleShow();
    axios
      .get(`https://localhost:7125/api/User/${id}`)
      .then((result) => {
        setEditUserName(result.data.userName);
        setEditPasswordHash(result.data.passwordHash);
        setEditEmail(result.data.email);
        setEditBirthDate(result.data.birthDate);
        setEditGender(result.data.gender);
        setEditProfilePicturePath(result.data.profilePicturePath);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this User?") === true) {
      axios
        .delete(`https://localhost:7125/api/User/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("User has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting User");
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7125/api/User/${editID}`;
    const data = {
      userID: editID,
      userName: editUserName,
      passwordHash: editPasswordHash,
      email: editEmail,
      birthDate: editBirthDate,
      gender: editGender,
      profilePicturePath: editProfilePicturePath,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("User has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/User";
    const data = {
        userName: userName,
        passwordHash: passwordHash,
        email: email,
        birthDate: birthDate,
        gender: gender,
        profilePicturePath: profilePicturePath,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("User has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setuserName("");
    setpasswordHash("");
    setemail("");
    setbirthDate("");
    setgender("");
    setprofilePicturePath("");
    setEditUserName("");
    setEditPasswordHash("");
    setEditEmail("");
    setEditBirthDate("");
    setEditGender("");
    setEditProfilePicturePath("");
    setEditId("");
  };

  return (
    <Fragment>
      <AdminMenu/>
      <ToastContainer />
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              value={userName}
              onChange={(e) => setuserName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Password Hash"
              value={passwordHash}
              onChange={(e) => setpasswordHash(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Enter BirthDate"
              value={birthDate}
              onChange={(e) => setbirthDate(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Gender"
              value={gender}
              onChange={(e) => setgender(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Profile Picture Path"
              value={profilePicturePath}
              onChange={(e) => setprofilePicturePath(e.target.value)}
            />
          </Col>
          <Col>
            <button className="btn btn-primary" onClick={() => handleSave()}>
              Submit
            </button>
          </Col>
        </Row>
      </Container>
      <br></br>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Password Hash</th>
            <th>Email</th>
            <th>BirthDate</th>
            <th>Gender</th>
            <th>Profile Picture Path</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.userName}</td>
                    <td>{item.passwordHash}</td>
                    <td>{item.email}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.gender}</td>
                    <td>{item.profilePicturePath}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.userID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.userID)}
                        //Yukarıdaki kod örneğinde, her bir dietitian için bir buton oluşturulurken, handleDelete fonksiyonu çağrılırken o dietitian'ın dietitianID'si kullanılır. Bu sayede doğru ID'nin silineceğini sağlarsınız.
                        //React tarafında, kullanıcının bir dietitian'i silmek için tıkladığı butonun içinde bu handleDelete fonksiyonunu çağırmanız gerekiyor.
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            : "Loading..."}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modify / Update Article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                value={editUserName}
                onChange={(e) => setEditUserName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Password Hash"
                value={editPasswordHash}
                onChange={(e) => setEditPasswordHash(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Birth Date"
                value={editBirthDate}
                onChange={(e) => setEditBirthDate(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Gender"
                value={editGender}
                onChange={(e) => setEditGender(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Profile Picture Path"
                value={editProfilePicturePath}
                onChange={(e) => setEditProfilePicturePath(e.target.value)}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <AdminFooter/>
    </Fragment>
  );
};

export default UserCRUD;
