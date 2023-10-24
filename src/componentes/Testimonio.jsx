/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "../styles/Testimonio.css";
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={`${props.imagen}.jpg`}
        alt={props.nombre}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>{props.nombre} </strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          <strong> {props.cargo}</strong> en {props.empresa}
        </p>
        <p className="texto-testimonio">{props.testimonio}</p>
      </div>
    </div>
  );
}

export default Testimonio;
