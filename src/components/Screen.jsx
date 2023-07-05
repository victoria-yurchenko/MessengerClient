import React, { useEffect, useState } from 'react'
import Sender from './Sender';

export default function Screen({ url }) {

    const [msg, setMsg] = useState([]);
    const [logged, setLogged] = useState(localStorage.getItem("Logged"));

    useEffect(() => {
        sendRequest();
        setInterval(sendRequest(), 50000);
    }, []);

    const sendRequest = () => {
        const toUrl = url + "/api/chat";
        fetch(toUrl)
            .then(response => response.json().then(data => {
                setMsg(data);
                console.log(data)
            }))
            .catch(error => console.log(error));
    }

    return (
        <div >
            <div className='main-div'>
                {
                    msg.map(m => {
                        if (m.dataType == "jpg" || m.dataType == "png" || m.dataType == "tiff")
                            return (
                                <div key={m.timestamp} className={m.from == logged ? 'msg msg-left' : 'msg msg-right'}>
                                    <p><span className={m.from == logged ? 'name name-left' : 'name name-right'}>{m.from}</span>&nbsp;{m.message}</p>
                                    <p><img src={m.dataUrl} alt='picture' width='120' /></p>
                                    <p className='time'><a href={m.dataUrl}>download image</a></p>
                                    <p className='time'>{m.timestamp}</p>
                                </div>
                            )
                        else
                            return (
                                <div key={m.timestamp} className={m.from == logged ? 'msg msg-right' : 'msg msg-left'}>
                                    <p><span className={m.from == logged ? 'name name-right' : 'name name-left'}>{m.from}</span>&nbsp;{m.message}</p>
                                    <p className='time'><a href={m.dataUrl} >file</a></p>
                                    <p className='time'>{m.timestamp}</p>
                                </div>
                            )
                    })
                }
            </div>
            <Sender url={url} />
        </div>
    )
}
