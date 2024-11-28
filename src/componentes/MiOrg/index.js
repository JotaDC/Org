import "./MiOrg.css"
//import { useState } from "react"

const MiOrg=(props)=>{
    //Estado - hook (llego en la version 16.8 de React)
    //Uso de useState
    //const [nombreVariabl, funcionActualiza]= useState(valorInicial)
    
    // const [mostrar, actualizaMostar]=useState(true)
    // const manejarClick=()=>{
    //     console.log("Mostrar/Ocultar elemento", mostrar)
    //     actualizaMostar(!mostrar)
    // }
    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="Agregar" onClick={props.cambiarMostrar}></img>
    </section>
}

export default MiOrg