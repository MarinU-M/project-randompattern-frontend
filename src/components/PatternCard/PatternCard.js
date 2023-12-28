import "./PatternCard.css";

function PatternCard(card) {
  return (
    <li className="PatternCard">
      <span className="PatternCard__tape"></span>
      <img
        className="PatternCard__img"
        alt="Pattern"
        src="https://images.pexels.com/photos/3732881/pexels-photo-3732881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <p className="PatternCard__title">some random pattern</p>
    </li>
  );
}

export default PatternCard;
