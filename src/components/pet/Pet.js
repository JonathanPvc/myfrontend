import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../../Global';
import DaPet from './DaPet';

const Pet = () => {

    const [pet, setPet] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getPet();
        console.log(pet);
    }, [pet.length]);


    const getPet = () => {
        axios.get(url + "pet/pet").then(res => {
            setPet(res.data.pet);
        });
    }


    const deletePet = (id) => {
        const idPet = pet[id]._id;
        axios.delete(url + "pet/delete/" + idPet).then(res => {
            getPet();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Mascotas</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        pet.length > 0 ? (

                            pet.map((pet, i) => {

                                return (




                                    <DaPet
                                        key={i}
                                        id={i}
                                        petData={pet}
                                        delPet={deletePet}

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

export default Pet;