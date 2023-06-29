import React, { useEffect, useState } from 'react'
import Sender from './Sender';

export default function Screen() {

    const [msg, setMsg] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5187/api/chat';
        fetch(url)
            .then(response =>
                response
                    .json()
                    .then(data => setMsg(data))
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className='main-div'>
                {
                    msg.map(m => {
                        return (
                            <div key={m.timestamp} className='msg'>
                                <p><span className='name'>{m.from}</span>&nbsp;{m.message}</p>
                                <p><img src={m.dataurl} alt='picture' height='100px' /></p>
                                <p className='time'>{m.timestamp}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Sender />
        </div>
    )
}
