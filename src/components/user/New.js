import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../../Global';

const New = () => {

    const url = Global.url;

    const [user, setUser] = useState({
        name: null,
        lastname: null,
        typedocument: null,
        numberdocument : null,
        state : null,
        sex : null,

    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let nameRef = React.createRef();
    let lastnameRef = React.createRef();
    let typedocumentRef = React.createRef();
    let numberdocumentRef = React.createRef();
    let stateRef = React.createRef();
    let sexRef = React.createRef();

    const changeState = () => {

        setUser({
            name: nameRef.current.value,
            lastname: lastnameRef.current.value,
            typedocument: typedocumentRef.current.value,
            numberdocument: numberdocumentRef.current.value,
            state: stateRef.current.value,
            sex: sexRef.current.value
        });

        console.log(user);

    }

    const sendData = (e) => {

        //Evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();

        changeState();

        //Petición http por POST para guardar el usuario:
        axios.post(url + 'save', user).then(res => {
            setRedirect(true);
            console.log(res.data);
        });

    }

    if(redirect){
        return <Navigate to="user" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Crear  Cliente</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="mb-3">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="title" name="title" ref={nameRef} onChange={changeState} required />

                        </div>

                        <div className="mb-3">
                            <label>Apellido</label>
                            <input className="form-control" rows="6" cols="30" ref={lastnameRef} onChange={changeState} required />
                        </div>

                        <div className="mb-3">
                        <label>Identificación:</label>
                            <select class="form-select" aria-label="Default select example" type="text" id="typedocument" name="typedocument" ref={typedocumentRef} onChange={changeState} required>
                            <option selected> Seleccione una opción:</option>
                            <option value="Cedula Ciudadania">C.C.</option>
                            <option value="Tarjeta Identidad">T.I.</option>
                            <option value="Cedula Extranjeria">C.E.</option>
                            <option value="pasaporte">Passport</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Numero de documento</label>
                            <input className="form-control" type="number" id="numberdocument" name="numberdocument" ref={numberdocumentRef} onChange={changeState} required />
                        </div>
                        <div className="mb-3">
                            <label>Estado</label>
                            
                            <select class="form-select" aria-label="Default select example" type="text" id="state" name="state" ref={stateRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="Soltero">Soltero</option>
                            <option value="Casado">Casado</option>
                            <option value="Viudo">Viudo</option>
                           
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Sexo</label>
                            <select className="form-control" type="text" id="sex" name="sex" ref={sexRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="Soltero">Masculino</option>
                            <option value="Casado">Femenino</option>
                            <option value="Viudo">No-binario</option>
                           
                            </select>
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Crear Cliente" />
                        </div>

                        

                    </form>

                </div>
            </div>
        </div>
    );
}

export default New;