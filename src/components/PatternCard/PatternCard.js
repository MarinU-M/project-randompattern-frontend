import "./PatternCard.css";

function PatternCard({ card, onClick }) {
  const name = card.name;
  const photo = card.first_photo.medium2_url;
  const query = card.permalink;
  const link = `https://www.ravelry.com/patterns/library/${query}`;

  return (
    <li className="pattern-card">
      <span className="pattern-card__tape"></span>
      <img
        className="pattern-card__img"
        alt="Pattern"
        src={photo}
        onClick={() => onClick({ name, photo, link })}
      />
      <p className="pattern-card__title">{name}</p>
    </li>
  );
}

export default PatternCard;
