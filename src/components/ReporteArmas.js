import React,{useState} from 'react';
import uuid from "uuid";
// import Error from './Error';
// import axios from 'axios';
// import Swal from 'sweetalert2';
//
// import { withRouter } from 'react-router-dom';

function ReporteArmas(props) {

  //"STATE"
  const [nombreSoldado, guardarNombre] = useState('');
  const [apellidoSoldado, guardarApellido] = useState('');
  const [rangoSoldado, guardarRango] = useState('');
  const [tipoArma, guardarArma] = useState('');
  const [descFalla, guardarFalla] = useState('');
  const [horaIng, guardarHora] = useState('');
  const [fechaIng, guardarFecha] = useState('');
  const [error, guardarError] = useState(true);

  const agregarReporte = async e => {
      e.preventDefault();

      if(nombreSoldado === '' || apellidoSoldado === '' || rangoSoldado === '' || tipoArma === '' || descFalla === ''
         || horaIng === '' || fechaIng === '') {
          guardarError(true);
          return;
      }
      guardarError(false);

      // crear nuevo producto POST

      try {
          const reporte = {
              nombreSoldado,
              apellidoSoldado,
              rangoSoldado,
              tipoArma,
              descFalla,
              horaIng,
              fechaIng,
          };
          reporte.id = uuid();
          console.log(reporte);
          console.log("PRODUCTO CREADO");

          props.crearReporte(reporte);

      } catch (error) {
          console.log(error);
          // Swal.fire({
          //     type: 'error',
          //     title:'Oops...',
          //     text: 'Hubo un error, vuelve a intentarlo'
          // })

      }

      // //redirigir producto
      // guardarRecargarProductos(true);
      // history.push('/productos');
  }

  return (
    <div className="card card-2">
      <div className="card-heading"></div>
      <div className="card-body">
        <h2 className="title">REPORTE DE ARMAS FALLADAS</h2>
        <form
        onSubmit={agregarReporte}>
          <div className="input-group">
            <input className="input--style-2" type="text" placeholder="Nombre del soldado" name="name"
            onChange={e => guardarNombre(e.target.value)}/>
          </div>
          <div className="input-group">
            <input className="input--style-2" type="text" placeholder="Apellido del soldado" name="lastname"
            onChange={e => guardarApellido(e.target.value)}
            />
          </div>
          <div className="row row-space">
            <div className="col-4">
              <div className="input-group">
                <input className="input--style-2" type="number" placeholder="Rango del soldado" name="rango"
                onChange={e => guardarRango(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="input-group">
            <input className="input--style-2" type="text" placeholder="Tipo de arma" name="arma"
            onChange={e => guardarArma(e.target.value)}
            />
          </div>
          <div className=" input-group">
            <div className="col-lg">
              <textarea className="input--style-2 col-lg" id="validationTextarea" placeholder="Descripcion de la falla" required="" styles={{margin: '0px', width: '513px', height: '97px',}}
              onChange={e => guardarFalla(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row ">
              <div className="col-4">
                  <div className="input-group">
                      <span className="label label-default input--style-2">Hora de ingreso</span>
                      <input className="input--style-2" type="time" placeholder="Hora de ingreso" name="hora"
                      onChange={e => guardarHora(e.target.value)}
                      />
                  </div>
              </div>
              <div className="col-4">
                  <div className="input-group">
                      <span className="label label-default input--style-2">Fecha</span>
                      <input className="input--style-2" type="date" placeholder="Fecha de ingreso" name="fecha"
                      onChange={e => guardarFecha(e.target.value)}
                      />
                  </div>
              </div>
          </div>


          <div className="p-t-30">
              <button className="btn btn--radius btn--green" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReporteArmas;
