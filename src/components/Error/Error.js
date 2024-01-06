import "./Error.css";

function Error({ message }) {
  return (
    <section className="error">
      <h2 className="error__title">Oopsie, something's going wrong.</h2>
      <p className="error__text">{message}</p>
    </section>
  );
}

export default Error;
