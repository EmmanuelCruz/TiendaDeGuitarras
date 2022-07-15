import Layout from '../components/Layout'
import Listado from '../components/Listado'
import Curso from '../components/Curso'
import Entrada from '../components/Entrada'
import styles from '../styles/Index.module.css'

export default function Home({ guitarras, curso, blog }) {

  return (
    <div>
      <Layout
        pagina='Inicio'
        guitarra={ guitarras[0] }
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra colección</h1>
          <Listado
            guitarras={guitarras}
          />
        </main>
        <Curso
          curso={curso}
        />

        <div className={`contenedor ${styles.marginTop}`}>
          <div className={styles.blog}>
            {
              blog.map(entrada => (
                <Entrada
                  key={entrada.id}
                  entrada={entrada}
                />
              ))
            }
          </div>
        </div>


      </Layout>
    </div>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/guitarras`
  const urlCursos = `${process.env.API_URL}/cursos`
  const urlBlog = `${process.env.API_URL}/blogs?_limit=3`
  const [respuesta, respuestaCursos, respuestaBlog] = await Promise.all([
    fetch(url),
    fetch(urlCursos),
    fetch(urlBlog)
  ])

  const [resultado, resultadoCursos, resultadoBlog] = await Promise.all([
    respuesta.json(),
    respuestaCursos.json(),
    respuestaBlog.json()
  ])

  return {
    props: {
      guitarras: resultado,
      curso: resultadoCursos,
      blog: resultadoBlog
    }
  }
}