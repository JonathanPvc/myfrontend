import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../../Global';

const FormMascotas = () => {

    const url = Global.url;

    const [mascota, setMascota] = useState({
        name: null,
        raza: null,
        sex: null,
       

    });

    const [redirect, setRedirect] = useState(false);

    //Referencia de los datos del formulario:
    let nameRef = React.createRef();
    let razaRef = React.createRef();
    let sexRef = React.createRef();

    const changeState = () => {

        setMascota({
            name: nameRef.current.value,
            lastname: razaRef.current.value,
            sex: sexRef.current.value
        });

        console.log(mascota);

    }

    const sendData2 = (e) => {

        //Evitamos que al recibir los datos se recargue la pantalla:
        e.preventDefault();

        changeState();

        //Petición http por POST para guardar la mascota:
        axios.post(url + 'save', mascota).then(res => {
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
                    <h4>Crear  Mascota</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData2}>

                        <div className="mb-3">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="title" name="title" ref={nameRef} onChange={changeState} required />

                        </div>

                        <div className="mb-3">
                            <label>Raza</label>
                        
                            <select className="form-control" rows="6" cols="30" ref={razaRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="RAZA: Boxer">Boxer</option>
                            <option value="RAZA: Pitbull">Pitbull</option>
                            <option value="RAZA: Labrador">Labrador</option>
                            <option value="RAZA: Criollo">Criollo</option>
                            <option value="RAZA: Rottweiler">Rottweiler</option>
                            <option value="RAZA: Bull Terrier">Bull Terrier</option>
                            <option value="RAZA: Chihuahua">Chihuahua</option>
                            
                           
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Sexo</label>
                            
                            <select className="form-control" type="text" id="sex" name="sex" ref={sexRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="Sexo: Macho">Macho</option>
                            <option value="Sexo: Hembra">Hembra</option>
                            
                           
                            </select>
                            
                        </div>

                        <div className="mb-3">
                            <input className="form-control btn btn-primary" type="submit" id="publish" value="Crear Mascota" />
                        </div>

                        

                    </form>

                </div>
            </div>
        </div>
    );
}

export default FormMascotas;