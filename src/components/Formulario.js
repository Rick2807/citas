import React, { Fragment, useState } from 'react'
import uuid from "uuid/v4";

const Formulario = ({createCita}) => {
    //Crear State de Citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })

    const [error, setError] = useState(false);

    //Handle Change Function
    const handleChange = (e) =>{
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    //Destructuring values from state 
    const {mascota, propietario, fecha, hora, sintomas} = cita; 

    //onSubmit function 
    const onSubmit = e => {
        e.preventDefault();
        
        //Validate
        if(mascota.trim() === '' || propietario.trim() === ''
        || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }
            setError(false);
        

        //Add ID
        cita.id = uuid();

        //create cita
        createCita(cita);

        //reset form 
        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: ''
    
        })

    }


    return (
        <Fragment>
            <h2>Crear Cita</h2>
            
            { error ? <p className="alerta-error">Todos los campos son obligatorios</p>
             : null }

            <form onSubmit={onSubmit}>
                <label htmlFor="">Nombre Mascota</label>
                <input
                 type="text"
                 name="mascota"
                 className="u-full-width"
                 placeholder="Nombre Mascota"
                 onChange={handleChange}
                 value={mascota}
                />

                <label htmlFor="">Nombre Dueño</label>
                <input
                 type="text"
                 name="propietario"
                 className="u-full-width"
                 placeholder="Dueño de la mascota"
                 onChange={handleChange}
                 value={propietario}
                />

                <label htmlFor="">Fecha</label>
                <input
                 type="date"
                 name="fecha"
                 className="u-full-width"
                 onChange={handleChange}
                 value={fecha}
                />

                <label htmlFor="">Hora</label>
                <input
                 type="time"
                 name="hora"
                 className="u-full-width"
                 onChange={handleChange}
                 value={hora}
                />

                <label htmlFor="">Sintomas</label>
                <textarea 
                name="sintomas"
                className="u-full-width"
                onChange={handleChange}
                value={sintomas}
                ></textarea>

                <button
                type="submit"
                className="u-full-width button-primary"
                >Agregar Cita</button>
            </form>
        </Fragment>
    )
}

export default Formulario
