import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <Link to="/#Inspo" className="Navigation__link">
            Inspo
          </Link>
        </li>

        <li className="Navigation__list-item">
          <Link to="/#About" className="Navigation__link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
