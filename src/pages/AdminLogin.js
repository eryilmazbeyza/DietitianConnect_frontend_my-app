import React, { Fragment, useState } from "react";
import "./Modal.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function AdminLogin({ setOpenModal }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handlePasswordHashChange = (value) => {
    setPasswordHash(value);
  };

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handleLogin = () => {
    const data = {
      PasswordHash: passwordHash,
      Email: email,
    };

    const url = "https://localhost:7125/api/Admin/Login";

    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
        if (result.data === "Admin is Invalid") {
          // Admin is invalid durumunda sayfaya yönlendirme yap
          navigate(error);
        } else {
          setLoggedIn(true);
          setError(null);
          // Başarılı girişte yönlendirme yap
          navigate("/admin");
        }
      })
      .catch((error) => {
        setError("Invalid email or password");
        console.error("Login error:", error);
        setLoggedIn(false);
      });
  };

  const handleCancel = () => {
    // Cancel butonuna basıldığında index sayfasına yönlendirme yap
    navigate("/");
  };

  return (
    <Fragment>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => {
                handleCancel(); // handleCancel fonksiyonunu çağır
              }}>X</button>
          </div>
          <div className="title">
            <h1>Admin Page Login</h1>
          </div>
          <div className="body">
          <div className="row">
            <label>Admin Email</label>
            <input
              type="text"
              id="txtEmail"
              placeholder="Enter Email"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
            <label>PasswordHash</label>
            <input
              type="text"
              id="txtPasswordHash"
              placeholder="Enter Password"
              onChange={(e) => handlePasswordHashChange(e.target.value)}
            />
            <br />
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          </div>
          <div className="footer">
            <button onClick={() => handleLogin()}>Login</button>
            {isLoggedIn && !error && <Link to="/admin">Admin</Link>}
            {!isLoggedIn && !error && <div></div>}
            <button
              onClick={() => {
                handleCancel(); // handleCancel fonksiyonunu çağır
              }}
              id="cancelBtn"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default AdminLogin;
