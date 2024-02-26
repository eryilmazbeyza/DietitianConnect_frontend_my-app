import React, { Fragment, useState } from "react";
import axios from "axios";

function Registration() {
  const [userName, setUserName] = useState("");
  const [passwordHash, setPasswordHash] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const handleUserNameChange = (value) => {
    setUserName(value);
  };
  const handlePasswordHashChange = (value) => {
    setPasswordHash(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleBirthDateChange = (value) => {
    setBirthDate(value);
  };
  const handleGenderChange = (value) => {
    setGender(value);
  };
  const handleSave = () => {
    const data = {
      UserName: userName,
      PasswordHash: passwordHash,
      Email: email,
      BirthDate: birthDate,
      Gender: gender,
    };
    const url = "https://localhost:7125/api/User/Registration";
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
      <div>Kayıt Ol                <br />
                <br /></div>
      <label>Ad Soyad</label>
      <input
        type="text"
        id="txtName"
        placeholder="Enter Name"
        onChange={(e) => handleUserNameChange(e.target.value)}
      />
      <br></br>
      <label>Şifre</label>
      <input
        type="text"
        id="txtPasswordHash"
        placeholder="Enter Password"
        onChange={(e) => handlePasswordHashChange(e.target.value)}
      />
      <br></br>
      <label>Email</label>
      <input
        type="text"
        id="txtEmail"
        placeholder="Enter Email"
        onChange={(e) => handleEmailChange(e.target.value)}
      />
      <br></br>
      <label>Doğum Tarihi</label>
      <input
        type="text"
        id="txtBirthDate"
        placeholder="Enter BirthDate"
        onChange={(e) => handleBirthDateChange(e.target.value)}
      />
      <br></br>
      <label>Cinsiyet</label>
      <input
        type="text"
        id="txtGender"
        placeholder="Enter Gender"
        onChange={(e) => handleGenderChange(e.target.value)}
      />
      <br></br>
      <button onClick={() => handleSave()} id="loginBtn">Kaydol</button>
    </Fragment>
  );
}

export default Registration;
