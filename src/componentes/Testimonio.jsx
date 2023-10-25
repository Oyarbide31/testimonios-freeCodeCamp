/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "../styles/Testimonio.css";

const MAX_LENGTH = 505;

function Testimonio({ person }) {
  const { imagen, nombre, pais, cargo, empresa, testimonio } = person;
  console.log(testimonio);
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio" src={`${imagen}.jpg`} alt={nombre} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{nombre} </strong> en {pais}
        </p>
        <p className="cargo-testimonio">
          <strong> {cargo}</strong> en {empresa}
        </p>
        <p className="texto-testimonio">
          {testimonio.length > MAX_LENGTH
            ? `${testimonio.slice(0, MAX_LENGTH)}...`
            : testimonio}
        </p>
      </div>
    </div>
  );
}

export default Testimonio;
