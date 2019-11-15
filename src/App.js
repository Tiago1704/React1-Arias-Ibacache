import React,{Component} from 'react';
// import "./bootstrap.min.css";

import ReporteArmas from "./components/ReporteArmas";
import Arma from "./components/Arma";
import ListadoArmas from "./components/ListadoArmas";


class App extends Component {
  state = {
    armas: []
  };

  //! Cuando la aplicacion se carga
  componentDidMount() {
    const armasLS = localStorage.getItem("armas");
    if (armasLS) {
      this.setState({ armas: JSON.parse(armasLS) });
    }
  }

  //! Cuando eliminamos o agregamos una nueva arma
  componentDidUpdate() {
    localStorage.setItem("armas", JSON.stringify(this.state.armas));
  }

  crearReporte = datos => {
    //console.log(datos);
    //copiar el state actual
    const armas = [...this.state.armas, datos];

    // agregar el nuevo state
    this.setState({
      armas
    });
  };

  //! Elimina las armas del state

  eliminarArma = id => {
    // console.log(id);
    //! tomar una copia del state
    const armasActuales = [...this.state.armas];
    const armas = armasActuales.filter(arma => arma.id !== id);

    this.setState({ armas });
  };

  render() {
    return (
      <div className="container">

        <ReporteArmas crearReporte={this.crearReporte} />

        <ListadoArmas
          armas={this.state.armas}
          eliminarArma={this.eliminarArma}
        />
      </div>
    );
  }
}

export default App;

//
// function App() {
//   const [armas, guardarArmas] = useState([]);
//   const [recargarArmas, guardarRecargarArmas] = useState(true);
//
//   useEffect(()=>{
//     if(recargarArmas) {
//       const armasLS = localStorage.getItem("armas");
//           if (armasLS) {
//           guardarArmas({ armas: JSON.parse(armasLS) });
//           }
//
//
//   }
//   guardarRecargarProductos(false);
//   );
//
//
//
//
//   return (
//     <ReporteArmas/>
//   );
// }
//
// export default App;
