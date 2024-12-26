import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuid(),
      equipo: "Data Science",
      foto: "https://github.com/JotaDC.png",
      nombre: "Javier Cañete",
      puesto: "Programador"
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysR-dev.png",
      nombre: "Genesys Ronón",
      puesto: "Desarrolladora de software e instructora"
    },
    {
      id: uuid(),
      equipo: "UX Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam"
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor"
    },
    {
      id: uuid(),
      equipo: "Innovación y gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack"
    }

  ])
  const [equipos,actualizarEquipos] = useState(
    [
      {
        id: uuid(),
        titulo: "Programación",
        colorPrimario: "#57c278",
        colorSecundario: "#d9f7e9"
      },
      {
        id: uuid(),
        titulo: "Front End",
        colorPrimario: "#82cffa",
        colorSecundario: "#e8f8ff"
      },
      {
        id: uuid(),
        titulo: "Data Science",
        colorPrimario: "#a6d157",
        colorSecundario: "#f0f8e2"
      },
      {
        id: uuid(),
        titulo: "Devops",
        colorPrimario: "#e06b69",
        colorSecundario: "#fde7e8"
      },
      {
        id: uuid(),
        titulo: "UX Diseño",
        colorPrimario: "#db6ebf",
        colorSecundario: "#fae9f5"
      },
      {
        id: uuid(),
        titulo: "Móvil",
        colorPrimario: "#ffba05",
        colorSecundario: "#fff5d9"
      },
      {
        id: uuid(),
        titulo: "Innovación y gestión",
        colorPrimario: "#ff8a29",
        colorSecundario: "#ffeedf"
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
  const eliminarColaborador = (id) => {
    // console.log("Eliminar Colaborador", id)
    //Filtrar colaboradores
    const nuevosColaboradores = colaboradores.filter((colaboradorActual) => colaboradorActual.id !== id)
    //Actualizar colaboradores
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar Color
  const actualizarColor = (color,id) => {
    console.log("Nuevo color: ", color,id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario=color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //Crear Equipo
  const crearEquipo=(nuevoEquipo)=>{
    actualizarEquipos([...equipos,{...nuevoEquipo,id:uuid()}])
  } 

  return (
    <div>
      <Header />
      {
        // mostrarFormulario ? <Formulario />:<></>
        mostrarFormulario && <Formulario
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      {
        equipos.map((equipo, index) => {
          return <Equipo key={index}
            datos={equipo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
          />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
