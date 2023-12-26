import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header() {
  return (
    <header className="header">
      <div className="header__titles">
        <h1 className="header__title">MadeWithLove</h1>
        <p className="header__subtitle">Your random fiber craft inspo </p>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;
