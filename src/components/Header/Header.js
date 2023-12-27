import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <Link to="/" className="header__title">
          MadeWithLove
        </Link>
        <p className="header__subtitle">Your random fiber craft inspo </p>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
