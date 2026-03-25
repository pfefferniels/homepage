import { Divider } from './components/Divider'
import image1 from './assets/start-1.jpg'
import { Carousel } from './components/Carousel'

function Home() {
  return (
    <>
      <div style={{
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        <Carousel images={[image1]} seconds={8} />
      </div>

      <h1 style={{
        marginTop: '2rem',
        marginBottom: 0,
        fontWeight: 'bold',
        fontSize: 'inherit'
      }}>
        Lute <Divider /> Harpsichord <Divider /> Basso Continuo
      </h1>
    </>
  )
}

export default Home
