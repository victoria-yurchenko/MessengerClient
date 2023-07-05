import React from 'react';
import { useState } from 'react';

export default function Login({ url }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        let toSend = user;
        const toUrl = url + "/api/users/login";
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(toSend)
        };
        fetch(toUrl, options)
            .then(response =>
                response.json()
                    .then(data => localStorage.setItem("Logged", data.name)))
            .catch(error => console.log(error));
    }

    return (
        <div className='row'>
            <hr />
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label
                        style={{
                            color: 'antiquewhite',
                            fontSize: '16pt',
                            marginLeft: '10px'
                        }}
                    >
                        Email
                    </label>
                    <input type='email' value={user.email}
                        onChange={event => setUser({ ...user, email: event.target.value })}
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#00394c',
                            border: '1px solid #011e',
                            color: 'antiquewhite',
                            height: '60px',
                            fontSize: '14pt',
                            display: 'block',
                            width: '100%',
                            marginTop: '5px'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <label
                        style={{
                            color: 'antiquewhite',
                            fontSize: '16pt',
                            marginLeft: '10px'
                        }}
                    >
                        Password
                    </label>
                    <input type='password' value={user.password}
                        onChange={event => setUser({ ...user, password: event.target.value })}
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#00394c',
                            border: '1px solid #011e',
                            color: 'antiquewhite',
                            height: '60px',
                            fontSize: '14pt',
                            display: 'block',
                            width: '100%',
                            marginTop: '5px'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' className='btn btn-success btn-sm' value='Login'
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#005e7d',
                            border: '1px solid #011e',
                            color: 'antiquewhite',
                            height: '60px',
                            fontSize: '14pt',
                            display: 'block',
                            width: '100%',
                            marginTop: '85px'
                        }}
                    />
                </div>
            </form>
        </div>
    )
}
