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
      equipo: "Data Science",
      foto: "https://github.com/JotaDC.png",
      nombre: "Javier Cañete",
      puesto: "Programador"
    },
    {
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/GenesysAluraLatam.png",
      nombre: "Genesys Ronón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      equipo: "UX Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      equipo: "Innovación y gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
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
  //Eliminar Colaborador
  const eliminarColaborador = (colaborador) => {
    console.log("Eliminar Colaborador", colaborador)
    // //Filtrar colaboradores
    // const nuevosColaboradores = colaboradores.filter((colaboradorActual) => colaboradorActual.nombre !== colaborador.nombre)
    // //Actualizar colaboradores
    // actualizarColaboradores(nuevosColaboradores)
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
            eliminarColaborador={eliminarColaborador}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
