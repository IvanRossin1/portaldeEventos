import React from 'react'
import '../../estilosgenerales.css'
import '../header/header.css'
import './footer.css'
import logo2 from './logo1.png'

const PiePagina = () => {
  return (
    <div className='footer blanco'>
      <div className='col150'><img src={logo2} />
        <div className='col150 flex'>
          <div className='col150'>
            <ul className='lista_columna'>
              <li>Categorias</li>
              <li>Salones</li>
              <li>Imagen Personal</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className='col150'>
            <ul className='lista_columna'>
              <li>Avisos Legales</li>
              <li>Terminos y condiciones</li>
              <li>Trabaja con nosotros</li>
              <li>Anuncia en el portal</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='col150 oro60'>asaasassaassaas</div>
    </div>
  )
}

export default PiePagina