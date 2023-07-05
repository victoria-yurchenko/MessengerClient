import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Screen from './Screen';
import Login from './Login';

export default function AppRouter({ url }) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login url={url} />} />
                <Route path='/register' element={<Register url={url} />} />
                <Route path='/chat' element={<Screen url={url} />} />
            </Routes>
        </BrowserRouter>
    )
}
