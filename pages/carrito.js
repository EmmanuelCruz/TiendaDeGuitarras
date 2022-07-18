import Layout from '../components/Layout'
import styles from '../styles/Carrito.module.css'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Carrito = ({ carrito, actualizaCantidad, eliminarProducto }) => {

  const [total, setTotal] = useState(0)

  useEffect(() => {
    const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)

    setTotal(calculoTotal)
  }, [carrito])

  return (
    <Layout
      pagina={'Carrito'}
    >
      <h1 className='heading'>Carrito</h1>
      <main className={`${styles.contenido} contenedor`}>
        <div className={styles.carrito}>
          {
            carrito.length === 0 ? 'Carrito vacío' : (
              carrito.map(producto => (
                <div key={producto.id} className={styles.producto}>
                  <div>
                    <Image layout='responsive' width={250} height={480} src={`${process.env.NEXT_PUBLIC_API_URL}${producto.imagen}`} />
                  </div>
                  <div>
                    <p className={styles.nombre}>{producto.nombre}</p>
                    <div className={styles.cantidad}>
                      <p>Cantidad</p>
                      <select 
                        className={styles.select} 
                        value={producto.cantidad} 
                        onChange={e => actualizaCantidad({
                          cantidad: e.target.value,
                          id: producto.id
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                      </select>
                    </div>
                    <p className={styles.precio}>$ <span>{producto.precio}</span></p>
                    <p className={styles.subtotal}>Subtotal: $ <span>{producto.precio * producto.cantidad}</span></p>
                  </div>

                  {/* Eliminar producto de carrito */}
                  <button
                    type='button'
                    className={styles.eliminar}
                    onClick={() => eliminarProducto(producto.id)}
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )
          }
        </div>
        <div className={styles.resumen}>
          {
            total > 0 ? (
              <>
                <h3>Resumen del pedido</h3>
                <p>Total a pagar: ${total}</p>
              </>
            ) :
            <p>No hay productos</p>
          }
        </div>
      </main>
    </Layout>
  )
}

export default Carrito
