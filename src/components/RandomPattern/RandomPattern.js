import "./RandomPattern.css";
import PatternCard from "../PatternCard/PatternCard";
import Error from "../Error/Error";

function RandomPattern({ list, onClick, isError }) {
  if (isError) {
    return <Error message="Please contact the creator." />;
  } else if (list.length === 0) {
    return <Error message="Please click the logo to try again." />;
  } else {
    return (
      <section className="random-pattern">
        <h2 className="random-pattern__title">
          How about these for your next project?
        </h2>
        <ul className="random-pattern__cards">
          {list.map((card) => (
            // console.log(card)
            <PatternCard key={card._id} card={card} onClick={onClick} />
          ))}
        </ul>
      </section>
    );
  }
}

export default RandomPattern;
