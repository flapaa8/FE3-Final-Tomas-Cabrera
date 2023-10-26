import { useState, useEffect } from 'react';
import Card from '../Components/Card';
import './destacados.css'


function Favs() {
    const [favs, setFavs] = useState([]);
  
    useEffect(() => {
      const favsFromLocalStorage = JSON.parse(localStorage.getItem('favs')) || [];
      setFavs(favsFromLocalStorage);
    }, []);
  
    return (
      <>
        <div className="invisibleContainer">
          <p>Doctores Destacados</p>
        </div>
        <ul className='father'>
          <Card usuarios={favs} isDestacadoPage={true}/>
        </ul>
      </>
    )
  }
  
  export default Favs;
