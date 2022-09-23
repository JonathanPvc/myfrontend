import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Hearder';
import FormHistorial from './components/historial/FormHistorial';
import FormMascotas from './components/mascotass/FormMascotas';

import New from './components/user/New';
import User from './components/user/User';

const Router = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<New />} />
                <Route exact path="/user" element={<User />} />
                <Route exact path="/formmascota" element={<FormMascotas />} />
                <Route exact path="/formhistorial" element={<FormHistorial />} />
            
            </Routes>
        </BrowserRouter>


    );
}

export default Router;