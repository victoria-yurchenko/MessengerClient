import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Register';
import Screen from './Screen';
import Login from './Login';

export default function AppRouter( props ) {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login url={props.url} />} />
                <Route path='/register' element={<Register url={props.url} />} />
                <Route path='/chat' element={<Screen url={props.url} />} />
            </Routes>
        </BrowserRouter>
    )
}
