import { Link, Outlet, useParams } from 'react-router-dom';
import './style.css';

export const Posts = () => {
    return (
        <div>
        <h1>Página de postis</h1>
        <Link to="/about" state={'esse é um state vindo do post para o about'}>botão para o about</Link>
            <Outlet/>
        </div>

        
    )
}




export const Mensagem = () => {


    const params = useParams();
    const {id} = params;
    return (
        <div>
        <h5>apenas a mensagem passada por id pela route(url)</h5><br/>
        <h6>
            mensagem: {id}
        </h6>
        
        

        </div>
    )
}