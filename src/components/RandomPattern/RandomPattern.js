import "./RandomPattern.css";
import PatternCard from "../PatternCard/PatternCard";

function RandomPattern({ items, onRandom, onClick }) {
  const randomPatterns = onRandom(items, 3);
  console.log(randomPatterns);

  return (
    <section className="random-pattern">
      <h2 className="random-pattern__title">
        How about these for your next project?
      </h2>
      <ul className="random-pattern__cards">
        {randomPatterns.map((card) => (
          // console.log(card)
          <PatternCard key={card._id} card={card} onClick={onClick} />
        ))}
      </ul>
    </section>
  );
}

export default RandomPattern;
