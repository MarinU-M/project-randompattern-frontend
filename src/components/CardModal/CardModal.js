import "./CardModal.css";
import close from "../../images/close.svg";

function CardModal({ selectedCard, onClose }) {
  const { name, photo, link } = selectedCard;

  return (
    <div className="CardModal" onClick={onClose}>
      <div
        className="CardModal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button className="CardModal__close" type="button" onClick={onClose}>
          <img src={close} alt="close button" />
        </button>
        <img className="CardModal__image" src={photo} alt={name} />

        <div className="CardModal__description">
          <p className="CardModal__title">{name}</p>
          <span className="CardModal__shadow">
            <a className="CardModal__link" href={link}>
              Learn more
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
