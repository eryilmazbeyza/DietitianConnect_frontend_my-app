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
import AdminMenu from "../pages/AdminMenu";
import AdminFooter from "../pages/AdminFooter";

const AdminCRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [adminName, setadminName] = useState("");
  const [passwordHash, setpasswordHash] = useState("");
  const [email, setemail] = useState("");
  const [authorizationLevel, setauthorizationLevel] = useState("");

  const [editID, setEditId] = useState("");
  const [editAdminName, setEditAdminName] = useState("");
  const [editPasswordHash, setEditPasswordHash] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editAuthorizationLevel, setEditAuthorizationLevel] = useState("");

  const admindata = [
    {
      adminID: 1,
      adminName: "bne",
      passwordHash: "1234",
      email: "eryilmazbeyza@gmail.com",
      authorizationLevel: "fullautorization",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/Admin")
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
      .get(`https://localhost:7125/api/Admin/${id}`)
      .then((result) => {
        setEditAdminName(result.data.adminName);
        setEditPasswordHash(result.data.passwordHash);
        setEditEmail(result.data.email);
        setEditAuthorizationLevel(result.data.authorizationLevel);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this Admin?") === true) {
      axios
        .delete(`https://localhost:7125/api/Admin/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Admin has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting Admin");
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7125/api/Admin/${editID}`;
    const data = {
      AdminID: editID,
      AdminName: editAdminName,
      passwordHash: editPasswordHash,
      email: editEmail,
      authorizationLevel: editAuthorizationLevel,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Admin has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/Admin";
    const data = {
      adminName: adminName,
      passwordHash: passwordHash,
      email: email,
      authorizationLevel: authorizationLevel,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Admin has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setadminName("");
    setpasswordHash("");
    setemail("");
    setauthorizationLevel("");
    setEditAdminName("");
    setEditPasswordHash("");
    setEditEmail("");
    setEditAuthorizationLevel("");
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
              placeholder="Enter Admin Name"
              value={adminName}
              onChange={(e) => setadminName(e.target.value)}
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
              type="text"
              className="form-control"
              placeholder="Enter Authorization Level"
              value={authorizationLevel}
              onChange={(e) => setauthorizationLevel(e.target.value)}
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
            <th>Admin Name</th>
            <th>Password Hash</th>
            <th>Email</th>
            <th>Authorization Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.adminName}</td>
                    <td>{item.passwordHash}</td>
                    <td>{item.email}</td>
                    <td>{item.authorizationLevel}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.adminID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.adminID)}
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
                placeholder="Enter Admin Name"
                value={editAdminName}
                onChange={(e) => setEditAdminName(e.target.value)}
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
                placeholder="Enter Authorization Level"
                value={editAuthorizationLevel}
                onChange={(e) => setEditAuthorizationLevel(e.target.value)}
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

export default AdminCRUD;
