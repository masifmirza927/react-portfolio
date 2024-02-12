import './App.css'
import FeatureCard from './components/featureCard/FeatureCard'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <section id='home' className='bg-black'>
        <div className='container mx-auto max-w-[1340px]'>
          <Navbar />
          <Hero />
        </div>
      </section>

      <section id='features'>
        <div className='container mx-auto max-w-[1340px]'>
          <FeatureCard />
        </div>
      </section>

    </>
  )
}

export default App
