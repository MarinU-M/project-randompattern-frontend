import "./Header.css";
import Navigation from "../Navigation/Navigation";

import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <HashLink smooth to="/#Inspo" className="header__title">
          MadeWithLove
        </HashLink>
        <p className="header__subtitle">Your random fiber craft inspo </p>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
