import './App.css'
import Nav from './components/nav/Nav'
import Footer from './components/footer/Footer'
import Welcome from './components/bienvenida/Welcome'
import Dentistas from './components/dentistas/Dentistas'
import Destacados from './components/dentistas/destacados/Destacados'
import Contacto from './components/contacto/Contacto'
import { Routes, Route } from 'react-router-dom'
import Detalle from './components/dentistas/detalle/Detalle'
import { useState, useEffect } from 'react'
import { themes,ThemeContext } from './contexts/ThemeContext'

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  useEffect(() => {
    document.body.className = theme === themes.dark ? 'dark' : 'light';
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Nav/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='dentistas/*' element={<Dentistas/>}/>
          <Route path='dentistas/dentista/:id' element={<Detalle/>}/>
          <Route path='destacados' element={<Destacados/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='*' element={<h1>404</h1>}/>
        </Routes>
        <Footer/>
      </ThemeContext.Provider>  
    </>
  )
}

export default App
