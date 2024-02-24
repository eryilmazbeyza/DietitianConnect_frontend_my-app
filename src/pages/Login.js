import React, { Fragment, useState } from "react";
import axios from "axios";
import Menu from "./Menu";
import Footer from "./Footer";
import Registration from "./Registration";

function Login() {
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
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
    const url = "https://localhost:7125/api/User/Login";
    axios
      .post(url, data)
      .then((result) => {
        alert(result.data);
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <Fragment>
      <div id="site-content">
        <Menu />

        <main className="main-content">
          <div className="author-bio">
            <div className="container">
              <div className="row">
                <div className="col-md-5">
                  <label>Email</label>
                  <input
                    type="text"
                    id="txtEmail"
                    placeholder="Enter Email"
                    onChange={(e) => handleEmailChange(e.target.value)}
                  />
                  <br></br>
                  <label>PasswordHash</label>
                  <input
                    type="text"
                    id="txtPasswordHash"
                    placeholder="Enter Password"
                    onChange={(e) => handlePasswordHashChange(e.target.value)}
                  />
                  <br></br>
                  <button onClick={() => handleLogin()}>Login</button>
                  <Registration />
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <!-- .main-content --> */}
       
        <Footer />
      </div>

      <script src="js/jquery-1.11.1.min.js"></script>
      <script src="js/plugins.js"></script>
      <script src="js/app.js"></script>
    </Fragment>
  );
}

export default Login;
