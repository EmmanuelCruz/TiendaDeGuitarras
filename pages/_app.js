import '../styles/normalize.css'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [carrito, setCarrito] = useState([])
  
  useEffect(() => {
    const carritoLocalStorage = JSON.parse(localStorage.getItem('carrito')) ?? [];
    setCarrito(carritoLocalStorage)
  }, [])
  
  useEffect(()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }, [carrito])
  
  const agregarCarrito = producto => {

    if(carrito.some( articulo => articulo.id === producto.id )){
      const carritoActualizado = carrito.map(articulo => {
        if(articulo.id === producto.id){
          articulo.cantidad = producto.cantidad
        }
        return articulo
      })

      setCarrito(carritoActualizado)
    } else{
      setCarrito([...carrito, producto])
    }
  }

  const actualizaCantidad = producto => {
    const carritoActualizado = carrito.map(articulo => {
      if(articulo.id === producto.id){
        articulo.cantidad = producto.cantidad
      }
      return articulo
    })
    setCarrito(carritoActualizado)
  }

  const eliminarProducto = id => {
    const carritoActualizado = carrito.filter(articulo => articulo.id !== id)
    setCarrito(carritoActualizado)
  }

  return <Component{...pageProps} eliminarProducto={eliminarProducto} actualizaCantidad={actualizaCantidad} agregarCarrito={agregarCarrito} carrito={carrito} />
}

export default MyApp
