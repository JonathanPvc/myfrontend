import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../../Global';
import DaHistorial from '../DaHistorial';

const Historial = () => {

    const [historial, setHistorial] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getHistorial();
        console.log(historial);
    }, [historial.length]);


    //Obtenemos las mascotas

    const getHistorial = () => {
        axios.get(url + "historial").then(res => {
            setHistorial(res.data.historial);
        });
    }

    //Eliminamos un Historial por su id

    const deleteHistorial = (id) => {
        const idHistorial = historial[id]._id;
        axios.delete(url + "delete/" + idHistorial).then(res => {
            getHistorial();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Historial</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        historial.length > 0 ? (

                            historial.map((historial, i) => {

                                return (




                                    <DaHistorial
                                        key={i}
                                        id={i}
                                        mascotaData={historial}
                                        delMascota={deleteHistorial}

                                    />




                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay Historial para mostrar</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Historial;