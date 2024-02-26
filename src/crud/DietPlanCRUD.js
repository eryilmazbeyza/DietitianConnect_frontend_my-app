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

const DietPlanCRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userID, setuserID] = useState("");
  const [dietitianID, setdietitianID] = useState("");
  const [startDate, setstartDate] = useState("");
  const [endDate, setendDate] = useState("");
  const [targetWeight, settargetWeight] = useState("");
  const [dietDescription, setdietDescription] = useState("");

  const [editID, setEditId] = useState("");
  const [editUserID, setEditUserID] = useState("");
  const [editDietitianID, setEditDietitianID] = useState("");
  const [editStartDate, setEditStartDate] = useState("");
  const [editEndDate, setEditEndDate] = useState("");
  const [editTargetWeight, setEditTargetWeight] = useState("");
  const [editDietDescription, setEditDietDescription] = useState("");


  const plandata = [
    {
      planID: 4,
      userID: 1,
      dietitianID: 1,
      startDate: "2023-10-10 00:00:00.0000000",
      endDate: "2024-10-10 00:00:00.0000000",
      targetWeight: "10.00",
      dietDescription: "lowcarb",
      user: null,
      dietitian: null,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/DietPlan")
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
      .get(`https://localhost:7125/api/DietPlan/${id}`)
      .then((result) => {
        setEditUserID(result.data.userID);
        setEditDietitianID(result.data.dietitianID);
        setEditStartDate(result.data.startDate);
        setEditEndDate(result.data.endDate);
        setEditTargetWeight(result.data.targetWeight);
        setEditDietDescription(result.data.dietDescription);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this diet plan?") === true) {
      axios
        .delete(`https://localhost:7125/api/DietPlan/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Diet Plan has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting diet plan");
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7125/api/DietPlan/${editID}`;
    const data = {
      planID: editID,
      userID: editUserID,
      dietitianID: editDietitianID,
      startDate: editStartDate,
      endDate: editEndDate,
      targetWeight: editTargetWeight,
      dietDescription: editDietDescription,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Diet Plan has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/DietPlan";
    const data = {
        userID: userID,
        dietitianID: dietitianID,
        startDate: startDate,
        endDate: endDate,
        targetWeight: targetWeight,
        dietDescription: dietDescription,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Diet Plan has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setuserID("");
    setdietitianID("");
    setstartDate("");
    setendDate("");
    settargetWeight("");
    setdietDescription("");
    setEditUserID("");
    setEditDietitianID("");
    setEditStartDate("");
    setEditEndDate("");
    setEditTargetWeight("");
    setEditDietDescription("");
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
              placeholder="Enter User ID"
              value={userID}
              onChange={(e) => setuserID(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Dietitian ID"
              value={dietitianID}
              onChange={(e) => setdietitianID(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Enter Start Date"
              value={startDate}
              onChange={(e) => setstartDate(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Enter End Date"
              value={endDate}
              onChange={(e) => setendDate(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Target Weight"
              value={targetWeight}
              onChange={(e) => settargetWeight(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Diet Description"
              value={dietDescription}
              onChange={(e) => setdietDescription(e.target.value)}
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
            <th>UserID</th>
            <th>DietitianID</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Target Weight</th>
            <th>Diet Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.userID}</td>
                    <td>{item.dietitianID}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td>{item.targetWeight}</td>
                    <td>{item.dietDescription}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.planID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.planID)}
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
                placeholder="Enter User ID"
                value={editUserID}
                onChange={(e) => setEditUserID(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Dietitian ID"
                value={editDietitianID}
                onChange={(e) => setEditDietitianID(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Start Date"
                value={editStartDate}
                onChange={(e) => setEditStartDate(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter End Date"
                value={editEndDate}
                onChange={(e) => setEditEndDate(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Target Weight"
                value={editTargetWeight}
                onChange={(e) => setEditTargetWeight(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Diet Description"
                value={editDietDescription}
                onChange={(e) => setEditDietDescription(e.target.value)}
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

export default DietPlanCRUD;
