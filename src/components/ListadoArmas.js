import React from "react";
import Arma from "./Arma.js";

const ListadoArmas = ({ armas, eliminarArma }) => (
  <div className="card mt-2 py-5">
    <div className="card-body">
      <h2 className="card-title text-center " styles={{color:'black'}}>Administra las armas aqui</h2>
      <div className="lista-armas">
        {armas.map(arma => (
          <Arma key={arma.id} arma={arma} eliminarArma={eliminarArma} />
        ))}
      </div>
    </div>
  </div>
);

export default ListadoArmas;
