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

const ArticleCRUD= () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [authorID, setauthorID] = useState("");
  const [publicationDate, setpublicationDate] = useState("");
  const [category, setcategory] = useState("");


  const [editID, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editAuthorID, setEditAuthorID] = useState("");
  const [editPublicationDate, setEditPublicationDate] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const articledata = [
    {
      articleID: 1,
      title: "nutrution",
      content: "finenutri",
      authorID: "1",
      publicationDate: "2020-10-10 00:00:00.0000000",
      category: "nutri",
    },
  ];

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("https://localhost:7125/api/Article")
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
      .get(`https://localhost:7125/api/Article/${id}`)
      .then((result) => {
        setEditTitle(result.data.title);
        setEditContent(result.data.content);
        setEditAuthorID(result.data.authorID);
        setEditPublicationDate(result.data.publicationDate);
        setEditCategory(result.data.category);
        setEditId(id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this article?") === true) {
      axios
        .delete(`https://localhost:7125/api/Article/${id}`)
        .then((result) => {
          if (result.status === 200) {
            toast.success("Article has been deleted");
            getData();
          }
        })
        .catch((error) => {
          console.error(error); // Hata mesajını konsola yazdır
          toast.error("Error deleting article");
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
    const url = `https://localhost:7125/api/Article/${editID}`;
    const data = {
      articleID: editID,
      title: editTitle,
      content: editContent,
      authorID: editAuthorID,
      publicationDate: editPublicationDate,
      category: editCategory,
    };

    axios
      .put(url, data)
      .then((result) => {
        handleClose();
        getData();
        clear();
        toast.success("Article has been updated");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleSave = () => {
    const url = "https://localhost:7125/api/Article";
    const data = {
        "title": title,
        "content": content,
        "authorID": authorID,
        "publicationDate": publicationDate,
        "category": category,
    };

    axios
      .post(url, data)
      .then((result) => {
        getData();
        clear();
        toast.success("Article has been added");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const clear = () => {
    settitle("");
    setcontent("");
    setauthorID("");
    setpublicationDate("");
    setcategory("");
    setEditTitle("");
    setEditContent("");
    setEditAuthorID("");
    setEditPublicationDate("");
    setEditCategory("");
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
              placeholder="Enter Title"
              value={title}
              onChange={(e) => settitle(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Content"
              value={content}
              onChange={(e) => setcontent(e.target.value)}
            />
          </Col>
          <Col>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Author ID"
              value={authorID}
              onChange={(e) => setauthorID(e.target.value)}
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
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
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
            <th>Title</th>
            <th>Content</th>
            <th>AuthorID</th>
            <th>Publication Date</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length > 0
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.content}</td>
                    <td>{item.authorID}</td>
                    <td>{item.publicationDate}</td>
                    <td>{item.category}</td>
                    <td colSpan={2}>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleEdit(item.articleID)}
                      >
                        Edit
                      </button>{" "}
                      &nbsp;
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.articleID)}
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
                placeholder="Enter Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Content"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
              />
            </Col>
            <Col>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Author ID"
                value={editAuthorID}
                onChange={(e) => setEditAuthorID(e.target.value)}
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
                placeholder="Enter Category"
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
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

export default ArticleCRUD;
