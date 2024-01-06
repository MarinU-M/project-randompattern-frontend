import "./Main.css";
import { Link } from "react-router-dom";

import crocheting from "../../images/crocheting.jpg";
import knitting from "../../images/knitting.jpg";
import yarnball from "../../images/yarnball.svg";

function Main({ onRandom, onClick }) {
  // choose random image
  const images = [crocheting, knitting, yarnball];
  const randomImage = onRandom(images, 1);

  return (
    <section className="pattern-button" id="Inspo">
      <div className="pattern-button__images">
        <span className="pattern-button__tape"></span>
        <img
          className="pattern-button__img"
          src={randomImage[0]}
          alt="Random craft"
        />
      </div>
      <div className="pattern-button__content">
        <h2 className="pattern-button__title">
          Brand new idea for your next project
        </h2>

        <h3 className="pattern-button__subtitle">
          "Sometimes running out of idea. Like, what do I make next?"
        </h3>
        <p className="pattern-button__text">
          I know, right? I'm in the same boat all the time. Scrolling Instagram
          and Pinterest but nothing tickles your fancy. That's why I made this
          tool to find your next knitting or crocheting inspo.
        </p>

        <Link
          to="/randompattern"
          className="pattern-button__btn"
          onClick={onClick}
        >
          Need inspo?
        </Link>
      </div>
    </section>
  );
}

export default Main;
