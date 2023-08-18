import './style.css';
import {useLocation, useParams, useSearchParams} from 'react-router-dom';

export const About = () => {
    const params = useParams();
    // é usado para resgatar informações enviadas por url
    const {id} = params;

    // é usada uma resgatar informações enviadas por url, todavia, informações não obrigatórias
    //as que tem o '?' antes de declara-las , esse método diferente do  useParams não precisa ser declarado
    // no main.jsx. 
    const[qs] = useSearchParams();




    // tratamento para pegar o lado enviado da pagina redirect
    const {state} = useLocation();



    return (
        <div>
        <h1> o elemento {id} foi puxado da url</h1>

        <h1> parametro:{id},<br></br> 
        quick search primeiro valor:{qs.get('quickSearch')},<br></br>
        quick search Segundo valor: {qs.get('segundovalor')}
        {/* exemplo de url: 
        http://localhost:5173/about/10?quickSearch=100&segundovalor=eu%20amo%20você%20muito 
        */}


        <p>{state}</p>
        </h1>
        </div>
    )
}