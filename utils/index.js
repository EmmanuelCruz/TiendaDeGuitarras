export const formateaFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const option = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }

  return fechaNueva.toLocaleDateString('es-ES', option)
}