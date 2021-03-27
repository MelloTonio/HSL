import React from 'react'
import { toast, ToastContainer, Zoom } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import './Temp.css'

export default function Temp(){
    const [temp, useTemp] = React.useState(0)
    const [fakeLag, setFakeLag] = React.useState(true)

    function SetTemperatura(){
        useTemp(36)
        setFakeLag(false)

        toast.success("Febre não detectada, você será redirecionado para formulário!")
        setInterval(()=>{
            window.location.href = "http://localhost:3000/Form";
        }, 3000)
        /*
        useTemp(Math.random() * (45 - 34) + 34)

        if (temp > 38){
            toast.error("Febre detectada, você será redirecionado para um contato médico imediatamente")
        }else if (temp < 39 && temp !== 0){
            toast.success("Febre não detectada, você será redirecionado para formulário!")
            setInterval(()=>{
                window.location.href = "http://localhost:3000/Form";
            }, 3000)
        }*/
    }


    return (
        <div className="flex-out">
            <ToastContainer draggable={false} transition={Zoom} autoClose={5000} position={'top-center'}></ToastContainer>
            <div className="flex-in">
                <div className="flex-title2">
                    <div className="flex3">
                        <h1 className="sans">Análise de temperatura</h1>
                        <p className="sans">* Em um caso real utilizariamos um Arduino</p>
                    </div>
                </div>
                <div className="temp">
                    {fakeLag ? (<img height="150" src="https://cdn.discordapp.com/attachments/825141451901632593/825414384289447936/giphy.gif"></img>) : (<div className="sans"><h1>{`${temp}ºC`}</h1></div>)}
                </div>
                <div className="try">
                    <button onClick={() => SetTemperatura()} className="but">Checar Temperatura</button>
                </div>
            </div>
        </div>
    )
}