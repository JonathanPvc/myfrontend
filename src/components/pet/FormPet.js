import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Global from '../../Global';

const FormPet = () => {

    const url = Global.url;

    const [pet, setPet] = useState({
        name: null,
        breed: null,
        sex: null,
       

    });

    const [redirect, setRedirect] = useState(false);

    let nameRef = React.createRef();
    let breedRef = React.createRef();
    let sexRef = React.createRef();

    const changeState = () => {

        setPet({
            name: nameRef.current.value,
            breed: breedRef.current.value,
            sex: sexRef.current.value
        });

        console.log(pet);

    }

    const sendData = (e) => {

        e.preventDefault();

        changeState();

      
        axios.post(url + 'pet/save', pet).then(res => {
            setRedirect(true);
            console.log(res.data);
        });

    }

    if(redirect){
        return <Navigate to="/pet" />;
    }

    return (
        <div className="nueva-publicacion">

            <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
                <div id="card-header" className="card-header text-dark">
                    <h4>Crear  Mascota</h4>
                </div>

                <div className="card-body">
                    <form onSubmit={sendData}>

                        <div className="mb-3">
                            <label>Nombre</label>
                            <input className="form-control" type="text" id="title" name="title" ref={nameRef} onChange={changeState} required />

                        </div>

                        <div className="mb-3">
                            <label>Raza</label>
                        
                            <select className="form-control" rows="6" cols="30" ref={breedRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="Boxer">Boxer</option>
                            <option value="Pitbull">Pitbull</option>
                            <option value="Labrador">Labrador</option>
                            <option value="Criollo">Criollo</option>
                            <option value="Rottweiler">Rottweiler</option>
                            <option value="Bull Terrier">Bull Terrier</option>
                            <option value="Chihuahua">Chihuahua</option>
                            
                           
                            </select>
                        </div>
                        <div className="mb-3">
                            <label>Sexo</label>
                            
                            <select className="form-control" type="text" id="sex" name="sex" ref={sexRef} onChange={changeState} required>
                            <option selected>seleccione una opción:</option>
                            <option value="Macho">Macho</option>
                            <option value="Hembra">Hembra</option>
                            
                           
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

export default FormPet;