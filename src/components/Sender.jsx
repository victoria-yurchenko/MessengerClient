import React, { useEffect, useState } from 'react';
import imageToBase64 from 'image-to-base64/browser';

export default function Sender(props) {

    const [msg, setMsg] = useState({ "from": "", "to": "", "message": "", "dataUrl": "", "dataType": "" });

    useEffect(() => { }, [msg]);

    const handleSubmit = (event) => {
        event.preventDefault();
        let toSend = msg;
        toSend.from = localStorage.getItem("Logged");
        const toUrl = props.url + "/api/chat";
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(toSend)
        };
        fetch(toUrl, options)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const handleSelect = (event) => {
        let dataUrl = URL.createObjectURL(event.target.files[0]);
        let base64 = '';
        let extention = event.target.files[0].type;
        setMsg({ ...msg, dataType: extention });
        imageToBase64(dataUrl)
            .then(response => base64 = response)
            .then(() => setMsg({ ...msg, dataUrl: base64, dataType: extention }))
            .catch(error => console.log(error));
    }

    return (
        <div className='row'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input type='submit' className='form-control' value='Send'
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#00394c',
                            borderBottom: '1px solid #011e',
                            borderTop: '1px solid #01122e',
                            color: '#fef7ed',
                            height: '60px'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Message...' value={msg.message}
                        onChange={event => setMsg({ ...msg, message: event.target.value })}
                        style={{
                            borderRadius: '0px',
                            height: '60px',
                            fontSize: '15pt',
                            backgroundColor: '#005e7d',
                            borderTop: '1px solid #011e',
                            borderBottom: '1px solid #011e',
                            color: '#fef7ed'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type='file' className='form-control' onChange={handleSelect}
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#fff',
                            border: '0px',
                            color: '#000'
                        }}
                    />
                </div>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Select user...' value={msg.to}
                        onChange={event => setMsg({ ...msg, to: event.target.value })}
                        style={{
                            borderRadius: '0px',
                            backgroundColor: '#fff',
                            borderBottom: '1px solid #011e',
                            borderTop: '1px solid #01122e',
                            color: '#000'
                        }}
                    />
                </div>

            </form>
        </div>
    )
}
