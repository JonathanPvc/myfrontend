import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../../Global';
import Mascota from '../mascota';

const Mascotas = () => {

    const [mascota, setMascota] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getMascota();
        console.log(mascota);
    }, [mascota.length]);


    //Obtenemos las mascotas

    const getMascota = () => {
        axios.get(url + "mascota").then(res => {
            setMascota(res.data.mascota);
        });
    }

    //Eliminamos una mascota por su id

    const deleteMascota = (id) => {
        const idMascota = mascota[id]._id;
        axios.delete(url + "delete/" + idMascota).then(res => {
            getMascota();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Mascotas</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        mascota.length > 0 ? (

                            mascota.map((mascota, i) => {

                                return (




                                    <Mascota
                                        key={i}
                                        id={i}
                                        mascotaData={mascota}
                                        delMascota={deleteMascota}

                                    />




                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay Mascotas para mostrar</h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Mascotas;