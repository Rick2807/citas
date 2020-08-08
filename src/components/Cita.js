import React from 'react'

function Cita({cita, eliminateCita}) {
    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span> </p>
            <p>Dueño: <span>{cita.propietario}</span> </p>
            <p>Fecha: <span>{cita.fecha}</span> </p>
            <p>Hora: <span>{cita.hora}</span> </p>
            <p>Sintomas: <span>{cita.sintomas}</span> </p>

            <button onClick={ () => eliminateCita(cita.id)} className="button eliminar u-full-width"> Eliminar &times;</button>
        </div>
        
    )
}

 

export default Cita