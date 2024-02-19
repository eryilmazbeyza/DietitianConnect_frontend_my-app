import React, { useState, useEffect, Fragment } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullName, setfullName] = useState("");
  const [expertiseArea, setexpertiseArea] = useState("");
  const [contactInformation, setcontactInformation] = useState("");

  const [editID, setEditId] = useState("");
  const [editFullName, setEditFullName] = useState("");
  const [editExpertiseArea, setEditExpertiseArea] = useState("");
  const [editContactInformation, setEditContactInformation] = useState("");

  const dietdata = [
    {
      dietitianID: 1,
      fullName: "Billur Kuzudişli",
      expertiseArea: "Dietitian, Psychologist",
      contactInformation: "billurkuzudisli@gmail.com",
    },
    {
      dietitianID: 2,
      fullName: "Beyzanur",
      expertiseArea: "Developer",
      contactInformation: "eryilmazbeyza@gmail.com",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/Dietitian")
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
      .get(`https://localhost:7125/api/Dietitian/${id}`)
      .then((result) => {
        setEditFullName(result.data.fullName);
        setEditExpertiseArea(result.data.expertiseArea);
        setEditContactInformation(result.data.contactInformation);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this dietitian?") === true) {
      axios
        .delete(`https://localhost:7125/api/Dietitian/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Dietitian has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting dietitian");
        });
    }
  };

  // const handleDelete = (id) => {
  //   if (window.confirm("Are you sure to delete this dietitian?") === true) {
  //     axios.delete(`https://localhost:7125/api/Dietitian/${id}`)
  //       .then((result) => {
  //         if (result.status === 200)
  //         {
  //           toast.success("Dietitian has been deleted");
  //           getData();
  //         }
  //       })
  //       .catch((error) => {
  //         toast.error(error);
  //       });
  //   }
  // };

  const handleUpdate = () => {
    const url = `https://localhost:7125/api/Dietitian/${editID}`;
    const data = {
      dietitianID: editID,
      fullName: editFullName,
      expertiseArea: editExpertiseArea,
      contactInformation: editContactInformation,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Dietitian has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/Dietitian";
    const data = {
      fullName: fullName,
      expertiseArea: expertiseArea,
      contactInformation: contactInformation,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Dietitian has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setfullName("");
    setexpertiseArea("");
    setcontactInformation("");
    setEditFullName("");
    setEditExpertiseArea("");
    setEditContactInformation("");
    setEditId("");
  };

  return (
    <Fragment>
      <ToastContainer />
      <Container>
        <Row>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Expertise Area"
              value={expertiseArea}
              onChange={(e) => setexpertiseArea(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Contact Information"
              value={contactInformation}
              onChange={(e) => setcontactInformation(e.target.value)}
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
            <th>Full Name</th>
            <th>Expertise Area</th>
            <th>Contact Information</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.fullName}</td>
                    <td>{item.expertiseArea}</td>
                    <td>{item.contactInformation}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.dietitianID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.dietitianID)}
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
          <Modal.Title>Modify / Update Dietitian</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Full Name"
                value={editFullName}
                onChange={(e) => setEditFullName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Expertise Area"
                value={editExpertiseArea}
                onChange={(e) => setEditExpertiseArea(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Contact Information"
                value={editContactInformation}
                onChange={(e) => setEditContactInformation(e.target.value)}
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
    </Fragment>
  );
};

export default CRUD;
