import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario =()=>{

    const manejarEnvio=(event)=>{
        event.preventDefault()
        console.log("Manejar Envio: ",event)
        
    }

    return  <section className="formulario">
                <form onSubmit={manejarEnvio}>
                    <h2>Rellena el formulario para crear el colaborador</h2>
                    <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/>
                    <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/>
                    <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/>
                    <ListaOpciones />
                    
                    <Boton>Crear</Boton>
                </form>
            </section>
}

export default Formulario