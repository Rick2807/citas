import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  


 //local storage
 let citasIniciales = JSON.parse(localStorage.getItem('citas'));
 if(!citasIniciales){
   citasIniciales = [];
 }

  //create citas state
  const [citas, setCitas] = useState(citasIniciales); 

  //useEffect for certain operations
  useEffect(() =>{
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  },[citas])
  
  //Create cita 
  const createCita = cita => {
    setCitas([
      ...citas,
      cita
    ])
  }

  //Eliminate cita 
  const eliminateCita = id => {
    const newCita = citas.filter(cita => cita.id !== id )
    setCitas(newCita)
  }

  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';  

  return (
    <Fragment>
        <h1>Administrador de pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
                <Formulario
                  createCita={createCita}
                />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                  <Cita
                    eliminateCita={eliminateCita}
                    key={cita.id}
                    cita={cita}
                  />
              )
              )}
            </div>
          </div>
        </div>
    </Fragment>
    
  );
}

export default App;
