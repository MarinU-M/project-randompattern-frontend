import "./Footer.css";
import linkedin from "../../images/icons8-linkedin.svg";
import github from "../../images/github-mark.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">© 2024 Marin Umegane-McGuinness</p>
      <ul className="footer__links">
        <li className="footer__link">
          <a
            href="https://www.linkedin.com/in/marin-umegane/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__link-image"
              src={linkedin}
              alt="linkedin icon"
            />
          </a>
        </li>
        <li className="footer__link">
          <a
            href="https://github.com/MarinU-M"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="footer__link-image"
              src={github}
              alt="github icon"
            />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
