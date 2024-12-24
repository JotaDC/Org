import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"
import { BiTone } from "react-icons/bi"

const Equipo = (props) => {
    //Desestructuración
    const { titulo, colorPrimario, colorSecundario, id } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
  
    const obj = {
        backgroundColor: hexToRgba(colorPrimario,0.6)
    }

    const estiloTitulo = {
        borderColor: colorPrimario
    }

    
    return <>
        {colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                <input
                    className="input-color"
                    type='color'
                    value={colorPrimario} 
                    onChange={(e)=>{
                        actualizarColor(e.target.value,id)
                    }}
                />
                <h3 style={estiloTitulo}>{titulo}</h3>
                <div className="colaboradores">

                    {
                        colaboradores.map((colaborador, index) => {
                            return <Colaborador
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario}
                                eliminarColaborador={eliminarColaborador}
                            />
                        })
                    }

                </div>
            </section>
        }
    </>
}

export default Equipo