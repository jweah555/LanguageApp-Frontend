import "../pages/LoginSignUp.css";
import grammerBook from "../assets/images/grammer2.png";
import { Link } from "react-router";

function LoginSignUp() {
  //   const isHeader = location.pathname

  return (
    <main>
      <section className="auth-container">
        <div className="auth-left-side">
          <form className="auth-form">
            <h1 className="auth-h1">Login</h1>
            <span className="please">
              Please login to continue to your account.
            </span>
            <input
              className="user-input"
              placeholder=" UserName"
              type="text"
            ></input>
            <input
              className="user-password-input"
              placeholder=" Password"
              type="password"
            ></input>
            <button type="submit" className="sign-button">
              Login
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
