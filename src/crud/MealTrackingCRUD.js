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

const MealTrackingCRUD = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userID, setuserID] = useState("");
  const [publicationDate, setpublicationDate] = useState("");
  const [mealType, setmealType] = useState("");
  const [mealName, setmealName] = useState("");
  const [quantity, setquantity] = useState("");
  const [calories, setcalories] = useState("");
  const [protein, setprotein] = useState("");
  const [carbohydrates, setcarbohydrates] = useState("");
  const [fat, setfat] = useState("");

  const [editID, setEditId] = useState("");
  const [editUserID, setEditUserID] = useState("");
  const [editPublicationDate, setEditPublicationDate] = useState("");
  const [editMealType, setEditMealType] = useState("");
  const [editMealName, setEditMealName] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editCalories, setEditCalories] = useState("");
  const [editProtein, setEditProtein] = useState("");
  const [editCarbohydrates, setEditCarbohydrates] = useState("");
  const [editFat, setEditFat] = useState("");

  const trackingdata = [
    {
      trackingID: 1,
      userID: 1,
      publicationDate: "2024-10-10T00:00:00",
      mealType: "carb",
      mealName: "bread",
      quantity: 10,
      calories: 1100,
      protein: 10,
      carbohydrates: 1050,
      fat: 40,
      user: null,
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/MealTracking")
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
      .get(`https://localhost:7125/api/MealTracking/${id}`)
      .then((result) => {
        setEditUserID(result.data.userID);
        setEditPublicationDate(result.data.publicationDate);
        setEditMealType(result.data.mealType);
        setEditMealName(result.data.mealName);
        setEditQuantity(result.data.quantity);
        setEditCalories(result.data.calories);
        setEditProtein(result.data.protein);
        setEditCarbohydrates(result.data.carbohydrates);
        setEditFat(result.data.fat);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this meal tracking?") === true) {
      axios
        .delete(`https://localhost:7125/api/MealTracking/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Meal Tracking has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting meal tracking");
        });
    }
  };

  const handleUpdate = () => {
    const url = `https://localhost:7125/api/MealTracking/${editID}`;
    const data = {
      trackingID: editID,
      userID: editUserID,
      publicationDate: editPublicationDate,
      mealType: editMealType,
      mealName: editMealName,
      quantity: editQuantity,
      calories: editCalories,
      protein: editProtein,
      carbohydrates: editCarbohydrates,
      fat: editFat,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Meal Tracking has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/MealTracking";
    const data = {
        userID: userID,
        publicationDate: publicationDate,
        mealType: mealType,
        mealName: mealName,
        quantity: quantity,
        calories: calories,
        protein: protein,
        carbohydrates: carbohydrates,
        fat: fat,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Meal Tracking has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    setuserID("");
    setpublicationDate("");
    setmealType("");
    setmealName("");
    setquantity("");
    setcalories("");
    setprotein("");
    setcarbohydrates("");
    setfat("");
    setEditUserID("");
    setEditPublicationDate("");
    setEditMealType("");
    setEditMealName("");
    setEditQuantity("");
    setEditCalories("");
    setEditProtein("");
    setEditCarbohydrates("");
    setEditFat("");
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
              type="datetime-local"
              className="form-control"
              placeholder="Enter Publication Date"
              value={publicationDate}
              onChange={(e) => setpublicationDate(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Meal Type"
              value={mealType}
              onChange={(e) => setmealType(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Meal Name"
              value={mealName}
              onChange={(e) => setmealName(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Quantity"
              value={quantity}
              onChange={(e) => setquantity(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Calories"
              value={calories}
              onChange={(e) => setcalories(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Protein"
              value={protein}
              onChange={(e) => setprotein(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Carbohydrates"
              value={carbohydrates}
              onChange={(e) => setcarbohydrates(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Fat"
              value={fat}
              onChange={(e) => setfat(e.target.value)}
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
            <th>Publication Date</th>
            <th>Meal Type</th>
            <th>Meal Name</th>
            <th>Quantity</th>
            <th>Calories</th>
            <th>Protein</th>
            <th>Carbohydrates</th>
            <th>Fat</th>
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
                    <td>{item.publicationDate}</td>
                    <td>{item.mealType}</td>
                    <td>{item.mealName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.calories}</td>
                    <td>{item.protein}</td>
                    <td>{item.carbohydrates}</td>
                    <td>{item.fat}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.trackingID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.trackingID)}
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
                placeholder="Enter Publication Date"
                value={editPublicationDate}
                onChange={(e) => setEditPublicationDate(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Meal Type"
                value={editMealType}
                onChange={(e) => setEditMealType(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Meal Name"
                value={editMealName}
                onChange={(e) => setEditMealName(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Quantity"
                value={editQuantity}
                onChange={(e) => setEditQuantity(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Calories"
                value={editCalories}
                onChange={(e) => setEditCalories(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Protein"
                value={editProtein}
                onChange={(e) => setEditProtein(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Carbohydrates"
                value={editCarbohydrates}
                onChange={(e) => setEditCarbohydrates(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Fat"
                value={editFat}
                onChange={(e) => setEditFat(e.target.value)}
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

export default MealTrackingCRUD;
