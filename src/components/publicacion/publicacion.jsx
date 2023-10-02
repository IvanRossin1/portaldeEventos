import './publi.css'
// const localidad = 'Algun lugar'
// const zona = 'Gba Norte'

export const Publicacion = () => {
  return (
    <div className="publi">
        <div className='datos_publi'>
            <div className="mi_zona">
                <i className="material-icons-outlined">place</i>
                {props.localidad}
                {props.zona}
            </div>
        </div>
        <div className='imagen'></div>
    </div>
  )
}
