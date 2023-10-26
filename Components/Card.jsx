import { useState, useEffect } from 'react';
import {  Link } from 'react-router-dom'

function Card(props) {
    const [favs, setFavs] = useState([])

    useEffect(() => {
        const favsFromLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
        setFavs(favsFromLocalStorage);
      }, []);

    function handleDestacado(usuarioDestacado) {
        if (!favs.some((favorito) => favorito.id === usuarioDestacado.id)) {
          const nuevosFavs = [...favs, usuarioDestacado];
          setFavs(nuevosFavs);
          localStorage.setItem('favs', JSON.stringify(nuevosFavs));
        }
    }
    
    function handleRemover(usuarioDestacado) {
        const nuevosFavs = favs.filter((favorito) => favorito.id !== usuarioDestacado.id);
        setFavs(nuevosFavs);
        localStorage.setItem('favs', JSON.stringify(nuevosFavs));
    }

    return (
        <>
        {props.usuarios.map((usuario)=>(
                    <div key={usuario.id} className='contornoCard'>
                        <Link to={`dentista/${usuario.id}`}>
                            <li>
                                <header>
                                    <img src="/img/doctor.jpg" alt="imagenDoctor" />
                                </header>
                                <p>{usuario.name}</p>
                                <span>{usuario.username}</span>
                            </li>
                        </Link>
                        <button onClick={() => props.isDestacadoPage ? handleRemover(usuario) : handleDestacado(usuario)} className="button-destacado">
                            {props.isDestacadoPage ? 'Remover' : 'Destacar'}
                        </button>
                    </div>
                    ))}
        </>
    )
}

export default Card;