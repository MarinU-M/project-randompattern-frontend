import "./CardModal.css";

function CardModal({ selectedCard, onClose }) {
  const { name, photo, link } = selectedCard;

  return (
    <div className="CardModal" onClick={onClose}>
      <div
        className="CardModal__content"
        onClick={(evt) => evt.stopPropagation()}
      >
        <button
          className="CardModal__close"
          type="button"
          onClick={onClose}
        ></button>
        <img className="CardModal__image" src={photo} alt={name} />

        <p className="modal__description">
          <span>{name}</span>
          <span>
            <a href={link}>Learn more</a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default CardModal;
