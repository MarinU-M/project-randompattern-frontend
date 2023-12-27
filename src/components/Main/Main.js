import "./Main.css";
import { Link } from "react-router-dom";

import crocheting from "../../images/crocheting.jpg";
import knitting from "../../images/knitting.jpg";
import yarnball from "../../images/yarnball.svg";

function Main() {
  // choose random image
  const images = [crocheting, knitting, yarnball];
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  return (
    <section className="PatternButton">
      <div className="PatternButton__images">
        <span className="PatternButton__tape"></span>
        <img
          className="PatternButton__img"
          src={randomImage}
          alt="Random craft"
        />
      </div>
      <div className="PatternButton__content">
        <h2 className="PatternButton__title">
          Brand new idea for your next project
        </h2>

        <h3 className="PatternButton__subtitle">
          "Sometimes running out of idea. Like, what do I make next?"
        </h3>
        <p className="PatternButton__text">
          I know, right? I'm in the same boat all the time. Scrolling Instagram
          and Pinterest but nothing tickles your fancy. That's why I made this
          tool to find your next knitting or crocheting inspo.
        </p>

        <Link to="/randompattern" className="PatternButton__btn">
          Need inspo?
        </Link>
      </div>
    </section>
  );
}

export default Main;
