import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Global from '../../Global';
import User from './User';

const Users = () => {

    const [user, setUser] = useState([]);
    const url = Global.url;

    useEffect(() => {
        getUser();
        console.log(user);
    }, [user.length]);


    const getUser = () => {
        axios.get(url + "user").then(res => {
            setUser(res.data.user);
        });
        console.log(setUser);
    }


    const deleteUser = (id) => {
        const idUser = user[id]._id;
        axios.delete(url + "delete/" + idUser).then(res => {
            getUser();
        });
    }

    return (

        <div className="publicaciones">
            <h1 className="mt-5">Nuestra Base de Datos</h1>
            <br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
                    {
                        user.length > 0 ? (

                            user.map((user, i) => {

                                return (




                                    <User
                                        key={i}
                                        id={i}
                                        userData={user}
                                        delUser={deleteUser}

                                    />




                                );
                            })

                        ) : (

                            <h3 className="mx-auto">No hay Datos para mostrar </h3>

                        )}
                </div>
            </div>
        </div>

    );
}

export default Users;