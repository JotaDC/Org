import { useState } from 'react';

import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      equipo: "Front End",
      foto: "https://github.com/JotaDC.png",
      nombre: "Javier Cañete",
      puesto: "Programador"
    }

  ])
  //Ternario --> condicion ? seMuestra: noSeMuestra
  // condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Lista de equipos
  const equipos = [
    {
      titulo: "Programación",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      titulo: "Front End",
      colorPrimario: "#82cffa",
      colorSecundario: "#e8f8ff"
    },
    {
      titulo: "Data Science",
      colorPrimario: "#a6d157",
      colorSecundario: "#f0f8e2"
    },
    {
      titulo: "Devops",
      colorPrimario: "#e06b69",
      colorSecundario: "#fde7e8"
    },
    {
      titulo: "UX Diseño",
      colorPrimario: "#db6ebf",
      colorSecundario: "#fae9f5"
    },
    {
      titulo: "Móvil",
      colorPrimario: "#ffba05",
      colorSecundario: "#fff5d9"
    },
    {
      titulo: "Innovación y gestión",
      colorPrimario: "#ff8a29",
      colorSecundario: "#ffeedf"
    }
  ]

  return (
    <div>
      <Header />
      {
        // mostrarFormulario ? <Formulario />:<></>
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo, index) => {
          return <Equipo key={index}
            datos={equipo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
