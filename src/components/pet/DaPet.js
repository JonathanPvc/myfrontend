import React from 'react';

const DaPet = ({ id, petData, delPet }) => {

    const { name, breed, sex } = petData;


    const del = () => {
        delPet(id);

    }


    return (
        <div className="col">
        <div className="card mx-auto mb-3">

            <div className="card-header">
                <h3 className="card-title">{name}</h3>
            </div>

            <div className="card-body">
                <label className="card-text text-start">{breed}</label>
            </div>
          
            <div className="card-body">
                <label className="card-text text-start">{sex}</label>
            </div>

            <div className="card-footer">
                <button type="button" className="btn btn-danger btn-sm" onClick={del}>
                    Eliminar
                </button>
            </div>
        </div>
        </div>

    );

}

export default DaPet;