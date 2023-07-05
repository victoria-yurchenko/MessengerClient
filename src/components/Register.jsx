import React, { useState } from 'react';
import imageToBase64 from 'image-to-base64/browser';
import { useEffect } from 'react';

export default function ({ url }) {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        avatar: ''
    });

    useEffect(() => { console.log(user); }, [user]);

    const handleSelect = (event) => {
        let dataUrl = URL.createObjectURL(event.target.files[0]);
        let base64 = '';
        imageToBase64(dataUrl)
            .then(response => base64 = response)
            .then(() => setUser({ ...user, avatar: base64 }))
            .catch(error => console.log(error));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let toSend = user;
        const toUrl = url + "/api/users";
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(toSend)
        };
        fetch(toUrl, options)
            .then(response => console.log(response))
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
                        Name
                    </label>
                    <input type='text' value={user.name}
                        onChange={event => setUser({ ...user, name: event.target.value })}
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
                        Email
                    </label>
                    <input type='text' value={user.email}
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
                    <input type='text' value={user.password}
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
                    <label
                        style={{
                            color: 'antiquewhite',
                            fontSize: '16pt',
                            marginLeft: '10px'
                        }}
                    >
                        Avatar
                    </label>
                    <input type='file' className='form-control' onChange={handleSelect}
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#00394c',
                            border: '1px solid #011e',
                            color: 'antiquewhite',
                            fontSize: '14pt',
                            display: 'block',
                            width: '100%',
                            marginTop: '5px'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type='submit' value='Register'
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
