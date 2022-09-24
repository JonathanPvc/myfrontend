import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Hearder';
import FormHistory from './components/history/FormHistory';
import History from './components/history/History';
import FormPet from './components/pet/FormPet';
import Pet from './components/pet/Pet';

import New from './components/user/New';

import Users from './components/user/Users';

const Router = () => {
    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<New />} />
                <Route exact path="/user" element={<Users />} />
                <Route exact path="/formpet" element={<FormPet />} />
                <Route exact path="/formhistory" element={<FormHistory />} />
                <Route exact path="/history" element={<History />} />
                <Route exact path="/pet" element={<Pet />} />
            
            </Routes>
        </BrowserRouter>


    );
}

export default Router;