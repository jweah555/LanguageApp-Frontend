import "../Header/Header.css";

function Header() {
  return (
    <header>
      <div>
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
      </div>
      <ul className="main-option">
        <li>Explore</li>
        <li>Create</li>
        <li>Decks</li>
        <li>Profile</li>
      </ul>
      <ul>
        <li className="login">Login</li>
        <li className="getStarted">Get Started</li>
      </ul>
    </header>
  );
}

export default Header;
