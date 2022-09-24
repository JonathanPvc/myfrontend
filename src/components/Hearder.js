import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Header = () => {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <NavLink to="/" className="navbar-brand" ><img className="App-logo" src={logo} alt="logo" width="80" /></NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                            <NavLink to="/" className="nav-link" >Crear Cliente <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="user" className="nav-link" >Nuestra Base de Datos <span className="sr-only"></span></NavLink>
                        </li>
                       
                       
                        <li className="nav-item active">
                            <NavLink to="formpet" className="nav-link" >Crear Mascotas <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="pet" className="nav-link" >Nuestras Mascotas <span className="sr-only"></span></NavLink>
                        </li>
                      
                       
                        <li className="nav-item active">
                            <NavLink to="formhistory" className="nav-link" >CrearHistorial <span className="sr-only"></span></NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink to="history" className="nav-link" >Nuestro Historial <span className="sr-only"></span></NavLink>
                        </li>
                        
                       
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Header;