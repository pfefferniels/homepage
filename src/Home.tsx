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

      <div style={{
        marginTop: '2rem',
        fontWeight: 'bold'
      }}>
        Lute <Divider /> Harpsichord <Divider /> Basso Continuo
      </div>
    </>
  )
}

export default Home
