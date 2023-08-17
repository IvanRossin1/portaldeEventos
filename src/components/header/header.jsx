import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import Login from './Login'
import logo from './img/logo1.png'

const Encabezado = () => {
  return (
    <div className='header'>
      <img src={logo} alt='' />
      <MenuEnlaces/>
      <Login/>
    </div>
  )
}

export default Encabezado
