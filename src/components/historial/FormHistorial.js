import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../../Global';

const FormHistorial = () => {

    const url = Global.url;

    const [historial, setHistorial] = useState({
        temperatura: null,
        peso: null,
        frecuencia_cardiaca: null,
        frecuencia_respiratoria: null,
        fecha_hora: null,
        alimentacion: null,
        habitad: null,
        observacion: null,
       

    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let temperaturaRef = React.createRef();
    let pesoRef = React.createRef();
    let frecuencia_cardiacaRef = React.createRef();
    let frecuencia_respiratoriaRef = React.createRef();
    let fecha_horaRef = React.createRef();
    let alimentacionRef = React.createRef();
    let habitadRef = React.createRef();
    let observacionRef = React.createRef();

    const changeState = () => {

        setHistorial({
            temperatura: temperaturaRef.current.value,
            peso: pesoRef.current.value,
            frecuencia_cardiaca: frecuencia_cardiacaRef.current.value,
            frecuencia_respiratoria : frecuencia_cardiacaRef.current.value,
            fecha_hora : frecuencia_cardiacaRef.current.value,
            alimentacion : frecuencia_cardiacaRef.current.value,
            habitad : frecuencia_cardiacaRef.current.value,
            observacion : frecuencia_cardiacaRef.current.value
        });

        console.log(historial);

    }

    const sendData3 = (e) => {

        //Evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();

        changeState();

        //Petición http por POST para guardar la mascota:
        axios.post(url + 'save', historial).then(res => {
            setRedirect(true);
            console.log(res.data);
        });

    }

    if(redirect){
        return <Navigate to="/user" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Historial</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData3}>

                        <div className="mb-3">
                            <label>Temperatura</label>
                            <input className="form-control" type="text" id="title" name="title" ref={temperaturaRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Peso</label>
                            <input className="form-control" type="text" id="title" name="title" ref={pesoRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Frecuencia Cardiaca</label>
                            <input className="form-control" type="text" id="title" name="title" ref={frecuencia_cardiacaRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Frecuencia Respiratoria</label>
                            <input className="form-control" type="text" id="title" name="title" ref={frecuencia_respiratoriaRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Fecha y Hora</label>
                            <input className="form-control" type="text" id="title" name="title" ref={fecha_horaRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Alimentacion</label>
                            <input className="form-control" type="text" id="title" name="title" ref={alimentacionRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Habitad</label>
                            <input className="form-control" type="text" id="title" name="title" ref={habitadRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Observaciones</label>
                            <input className="form-control" type="text" id="title" name="title" ref={observacionRef} onChange={changeState} required />

                        </div>

                    

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Crear Historial" />
                        </div>

                        

                    </form>

                </div>
            </div>
        </div>
    );
}

export default FormHistorial;