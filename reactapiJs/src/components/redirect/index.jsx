import { useEffect, useRef, useState } from 'react';
import './style.css';
import {useNavigate} from 'react-router-dom';

export const Redirect = () => {

const [time,setTime] = useState(3);
const timeout = useRef(0);
const navigate = useNavigate(); 


useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
        setTime((t)=>t-1);
    }, 1000);

    if(time<=0){
        // quando eu coloco o 'replace:true' estou dizendo que é para redirecionar e 
        //mudar a url desta página, para caso o usuario clique para voltar para essa aqui ele não consiga 
        

        // o state é usado para enviar um parametro para outra página

        navigate('/about',{
            // replace:true,
            state: `esse e um exemplo de state: ${Math.random()}`,
        });
    }

    return()=>{
        clearTimeout(timeout.current);
    }
    },[time]);


    return (
        <div>
            <h1>sairá da página em: {time}</h1>
        </div>
    )
}