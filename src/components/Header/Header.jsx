import "../Header/Header.css";
// import hamIcon from "../../assets/images/hamburgerIcon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoginSignUpPage = location.pathname ==

  return (
    <header>
      <div>
        <Link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="80"
            viewBox="0 0 400 150"
          >
            <path
              d="M30,20 h110 a20,20 0 0 1 20,20 v60 a20,20 0 0 1 -20,20 h-70 l-30,30 v-30 h-10 a20,20 0 0 1 -20,-20 v-60 a20,20 0 0 1 20,-20 z"
              fill="#2196f3"
            />

            <circle cx="65" cy="65" r="6.5" fill="white" />
            <circle cx="90" cy="65" r="6.5" fill="white" />
            <circle cx="115" cy="65" r="6.5" fill="white" />

            <text
              x="160"
              y="90"
              font-family="Montserrat, Arial, sans-serif"
              font-size="60"
              font-weight="bold"
              fill="#1e1e1e"
            >
              Deci
            </text>
          </svg>
        </Link>

        <button onClick={() => setIsOpen(!isOpen)}>
          {/* <img
            // className="ham-Icon"
            src={hamIcon}
          /> */}
          Menu
        </button>
      </div>

      {isOpen && (
        <nav className="sub-nav">
          <ul>
            <Link to="/createCard">
              <li>Card</li>
            </Link>

            <Link to="/createDeck">
              <li>Create</li>
            </Link>

            <Link to="/deckpage">
              <li>Decks</li>
            </Link>

            <li>Profile</li>
            <Link to="/loginSignUp">
              <li>Login</li>
            </Link>
            <Link to="/loginSignUp">
              <li>Get Started</li>
            </Link>
          </ul>
        </nav>
      )}

      <ul className="main-option">
        <Link to="/createCard">
          <li>Card</li>
        </Link>
        <Link to="/createDeck">
          <li>Create</li>
        </Link>

        <Link to="/deckpage">
          <li>Decks</li>
        </Link>

        <li>Profile</li>
      </ul>
      <ul>
        <Link to="/loginSignUp">
          <li className="login">Login</li>
        </Link>
        <Link to="/loginSignUp">
          <li className="getStarted">Get Started</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
