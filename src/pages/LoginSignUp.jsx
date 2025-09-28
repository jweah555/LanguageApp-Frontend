import "../pages/LoginSignUp.css";
import grammerBook from "../assets/images/grammer2.png";
import { Link } from "react-router";

import { useState } from "react";

function LoginSignUp() {
  //   const isHeader = location.pathname

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [language, setLanguage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, userName, password, role, language };

    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      alert("User registered successfully!");
      // Optionally clear the form
      setFirstName("");
      setLastName("");
      setUserName("");
      setPassword("");
      setRole("");
      setLanguage("");
    } else {
      const error = await response.text();
      alert("Registration failed: " + error);
    }
  };

  return (
    <main>
      <section className="auth-container">
        <div className="auth-left-side">
          <form className="auth-form">
            <h1 className="auth-h1">Sign Up</h1>
            <span className="please">
              Please login to continue to your account.
            </span>
            <input
              className="user-input"
              placeholder=" First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></input>
            <input
              className="user-input"
              placeholder=" Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></input>
            <input
              className="user-input"
              placeholder=" Language"
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            ></input>
            <input
              className="user-input"
              placeholder=" Role"
              type="text"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            ></input>
            <input
              className="user-input"
              placeholder=" UserName"
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            ></input>
            <input
              className="user-password-input"
              placeholder=" Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button
              type="submit"
              onClick={handleRegister}
              className="sign-button"
            >
              Sign Up
            </button>

            <Link to="/">
              <button className="sign-button">Return to Home Page</button>
            </Link>
          </form>
        </div>
        <div className="auth-right-side">
          <img src={grammerBook} className="auth-image" />
        </div>
      </section>
    </main>
  );
}

export default LoginSignUp;
