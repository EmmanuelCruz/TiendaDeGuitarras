import Layout from '../components/Layout'
import Image from 'next/image'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout
      pagina='Nosotros'
    >
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>

        <div className={styles.contenido}>
          <Image layout='responsive' width={600} height={450} src='/img/nosotros.jpg' alt='Sobre nosotros'/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec semper metus, id ornare nulla. Donec molestie ex ante, a ullamcorper ante vulputate a. Vivamus interdum sit amet eros sed laoreet. Aliquam finibus sem turpis, id tristique diam auctor et. Integer fermentum dui augue, ac feugiat orci tempor quis. Nulla viverra rutrum arcu. Nunc tellus arcu, sollicitudin vitae sapien eget, iaculis ultrices turpis. Donec eleifend felis nec nisl sagittis convallis. Vivamus non tellus sagittis, sodales lacus id, iaculis mi. Curabitur malesuada justo velit, nec eleifend elit euismod sed. Suspendisse euismod nisl a diam auctor, id hendrerit mi consequat. In at nulla euismod, efficitur est a, sodales odio. 
            </p>
            <p>
              Ut sit amet vestibulum erat. Aliquam ac tortor a magna interdum scelerisque. Duis maximus maximus tellus eu lacinia. Vestibulum id augue id quam ultricies egestas et ac diam. Sed in lorem scelerisque, sagittis mauris id, hendrerit nisl. Cras eros enim, commodo iaculis orci quis, gravida laoreet turpis. Aliquam euismod sollicitudin erat eget consectetur.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros
