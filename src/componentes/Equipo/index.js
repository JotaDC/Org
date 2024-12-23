import "./Equipo.css"
import Colaborador from "../Colaborador"
const Equipo = (props) => {
    //Desestructuración
    const { titulo, colorPrimario, colorSecundario } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props
  
    const obj = {
        backgroundColor: colorSecundario
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
                    value={colorSecundario} 
                    onChange={(e)=>{
                        actualizarColor(e.target.value,titulo)
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