import "./PatternCard.css";

function PatternCard({ card, onClick }) {
  const { item } = card;
  const name = item.name;
  const photo = item.first_photo.medium2_url;
  const query = item.permalink;
  const link = `https://www.ravelry.com/patterns/library/${query}`;

  return (
    <li className="PatternCard">
      <span className="PatternCard__tape"></span>
      <img
        className="PatternCard__img"
        alt="Pattern"
        src={photo}
        onClick={() => onClick({ name, photo, link })}
      />
      <p className="PatternCard__title">{name}</p>
    </li>
  );
}

export default PatternCard;
