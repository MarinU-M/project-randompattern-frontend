import "./Navigation.css";

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation__list">
        <li className="Navigation__list-item">
          <a className="Navigation__link" href="#Inspo">
            Inspo
          </a>
        </li>
        <li className="Navigation__list-item">
          <a className="Navigation__link" href="#About">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
