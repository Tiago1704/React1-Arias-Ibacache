import React from "react";

const Arma = ({ arma, eliminarArma }) => (
  <div className="media mt-3">
    <div className="media-body">
      <h3 className="mt-0">{arma.nombreArma}</h3>
      <p className="card-text">
        <span>Nombre del Soldado</span> {arma.nombreSoldado}
      </p>
      <p className="card-text">
        <span>Apellido del Soldado</span> {arma.apellidoSoldado}
      </p>
      <p className="card-text">
        <span>Rango del soldado</span> {arma.rangoSoldado}
      </p>
      <p className="card-text">
        <span>Tipo de Arma</span> {arma.tipoArma}
      </p>

    
      <p>
        <span>Fecha</span> {arma.fechaIng}
      </p>
      <p>
        <span>Hora</span> {arma.horaIng}
      </p>
      <p>
        <span></span> {arma.descFalla}
      </p>

      <button className="btn btn-danger" onClick={() => eliminarArma(arma.id)}>
        Borrar &times;
      </button>
    </div>
  </div>
);

export default Arma;
