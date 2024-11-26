import "./ListaOpciones.css"
const ListaOpciones=()=>{
    const equipos=[
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]
    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {
                equipos.map((equipo,index)=>{
                    return <option key={index}>{equipo}</option>
                })
            }
            <option>Programación</option>
            
            
            
            
        </select>
    </div>
}

export default ListaOpciones