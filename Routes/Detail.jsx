import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../detalle/detalle.css'

function Detail() {
    const [dentista, setDentista] = useState()
    const params = useParams()
    const atras = useNavigate()

    async function handleDentista(param) {
        const response = await(fetch(`https://jsonplaceholder.typicode.com/users/${param}`))

        const data = await response.json();
        setDentista(data)
    } 
    
    //console.log(params);
    
    useEffect(() => {
        handleDentista(params.id)
    },[])

    function volver() {
        atras(-1)
    }

    
    return (
        <>
            {dentista && (
                <>
                    <div className="invisibleContainer">
                        <p>Doctor Número: {dentista.id}</p>
                    </div>
                    <li key={dentista.id} className='li'>
                        <header>
                            <img src="/img/doctor.jpg" alt="imagenDoctor" />
                        </header>
                        <p>{dentista.name}</p>
                        <span>{dentista.username}</span>
                        <span>{dentista.email}</span>
                        <span>{dentista.phone}</span>
                        <span> {dentista.address.city}, {dentista.address.street}</span>
                        <button onClick={volver} className="button-destacado">
                            Atrás
                        </button>
                    </li>

                </>    
            )}
        </>
    )
}

export default Detail;