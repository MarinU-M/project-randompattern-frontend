import "./RandomPattern.css";
import PatternCard from "../PatternCard/PatternCard";

function RandomPattern() {
  return (
    <section className="RandomPattern">
      <h2 className="RandomPattern__title">
        How about these for your next project?
      </h2>
      <ul className="RandomPattern__cards">
        {/* {items.map((card) => ( */}
        <PatternCard />
        <PatternCard />
        <PatternCard />
        {/* key={card._id} item={card} */}
        {/* ))} */}
      </ul>
    </section>
  );
}

export default RandomPattern;
