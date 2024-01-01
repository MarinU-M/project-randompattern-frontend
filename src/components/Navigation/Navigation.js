import "./Navigation.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <HashLink to="/#About" className="Navigation__link">
            About
          </HashLink>
        </li>
        <li className="Navigation__list-item Navigation__list-item_Ravelry">
          <Link to="https://www.ravelry.com/" className="Navigation__link">
            Ravelry (External service)
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
