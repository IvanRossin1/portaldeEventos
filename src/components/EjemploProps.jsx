const listaBotones = ['Cancelar', 'Confirmar', 'Aceptar', 'Guardar']

export const EjemploProps = () => {
  return (
    <>
    {listaBotones.map(boton =>
      <button>{boton}</button>)
    }
    </>
  )
}
