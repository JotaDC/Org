import "./ListaOpciones.css"
const ListaOpciones=(props)=>{
    const equipos=[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

    const manejarCambios=(e)=>{
        console.log(e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambios}>
            <option value="" disabled hidden defaultValue="" >Seleccionar equipo</option>
            {
                equipos.map((equipo,index)=>{
                    return <option key={index} value={equipo}>{equipo}</option>
                })
            }
            
            
            
            
            
        </select>
    </div>
}

export default ListaOpciones