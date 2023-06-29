import React, { useEffect, useState } from 'react';
import imageToBase64 from 'image-to-base64/browser';

export default function Sender() {

    const [msg, setMsg] = useState({ "from": "", "to": "", "message": "", "dataUrl": "", "dataType": "" });

    useEffect(() => { }, [msg]);

    const handleSubmit = (event) => {
        
        event.preventDefault();
        let toSend = msg;
        const url = " http://localhost:5187/api/chat";
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify(toSend)
        };
        fetch(url, options)
            .then(response => console.log(response))
            .catch(error => console.log(error))
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
            <div className='col-md-3 col-lg-3'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Message...' value={msg.message}
                            onChange={event => setMsg({ ...msg, message: event.target.value })} />
                    </div>
                    <div className='form-group'>
                        <input type='file' className='form-control' onChange={handleSelect} />
                    </div>
                    <div className='form-group'>
                        <input type='text' className='form-control' placeholder='Select user...' value={msg.to}
                            onChange={event => setMsg({ ...msg, to: event.target.value })} />
                    </div>
                    <div className='form-group'>
                        <input type='submit' className='btn btn-success btn-sm' value='Send' />
                    </div>
                </form>
            </div>
        </div>
    )
}
