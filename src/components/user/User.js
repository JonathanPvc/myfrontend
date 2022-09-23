import React from 'react';

const User = ({ id, userData, delUser }) => {

    const { name, date, lastname, typedocument, numberdocument, state, sex } = userData;

    const formatDate = (date) => {
        return date.substring(8, 10) + date.substring(4, 8) + date.substring(0, 4);
    }

    const del = () => {
        delUser(id);

    }


    return (
        <div className="col">
        <div className="card mx-auto mb-3">

            <div className="card-header">
                <h3 className="card-title">{name}</h3>
            </div>

            <div className="card-body">
                <label className="card-text text-start">{lastname}</label>
            </div>

            <ul className="list-group list-group-flush">
                <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>Creado el: {formatDate(date)}</li>
                <li className=" list-pub list-group-item" style={{ 'fontSize': 12 }}>identification: {typedocument}</li>
            </ul>
            <div className="card-body">
                <label className="card-text text-start">{numberdocument}</label>
            </div>
            <div className="card-body">
                <label className="card-text text-start">{state}</label>
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

export default User;