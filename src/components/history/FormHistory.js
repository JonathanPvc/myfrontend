import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../../Global';

const FormHistory = () => {

    const url = Global.url;

    const [history, setHistory] = useState({
        temperature: null,
        weight: null,
        heart_rate: null,
        breathing_frequency: null,
        date_time: null,
        feeding: null,
        habitat: null,
        observation: null,
       

    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let temperatureRef = React.createRef();
    let weightRef = React.createRef();
    let heart_rateRef = React.createRef();
    let breathing_frequencyRef = React.createRef();
    let date_timeRef = React.createRef();
    let feedingRef = React.createRef();
    let habitatRef = React.createRef();
    let observationRef = React.createRef();

    const changeState = () => {

        setHistory({
            temperature: temperatureRef.current.value,
            weight: weightRef.current.value,
            heart_rate: heart_rateRef.current.value,
            breathing_frequency : breathing_frequencyRef.current.value,
            date_time : date_timeRef.current.value,
            feeding : feedingRef.current.value,
            habitat : habitatRef.current.value,
            observation : observationRef.current.value
        });

        console.log(history);

    }

    const sendData = (e) => {

        e.preventDefault();

        changeState();

        axios.post(url + 'history/save', history).then(res => {
            setRedirect(true);
            console.log(res.data);
        });

    }

    if(redirect){
        return <Navigate to="/history" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Historial</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="mb-3">
                            <label>Temperatura</label>
                            <input className="form-control" type="text" id="title" name="title" ref={temperatureRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Peso</label>
                            <input className="form-control" type="text" id="title" name="title" ref={weightRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Frecuencia Cardiaca</label>
                            <input className="form-control" type="text" id="title" name="title" ref={heart_rateRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Frecuencia Respiratoria</label>
                            <input className="form-control" type="text" id="title" name="title" ref={breathing_frequencyRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Fecha y Hora</label>
                            <input className="form-control" type="text" id="title" name="title" ref={date_timeRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Alimentacion</label>
                            <input className="form-control" type="text" id="title" name="title" ref={feedingRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Habitat</label>
                            <input className="form-control" type="text" id="title" name="title" ref={habitatRef} onChange={changeState} required />

                        </div>
                        <div className="mb-3">
                            <label>Observaciones</label>
                            <input className="form-control" type="text" id="title" name="title" ref={observationRef} onChange={changeState} required />

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

export default FormHistory;