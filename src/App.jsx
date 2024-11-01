import './App.css'
import Carousel from './components/carousel/Carousel'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Services from './components/services/Services'
import AboutUs from './components/aboutus/AboutUs'

function App() {

  return (
    <>
      <Header />
      <Carousel />
      <AboutUs />
      <Services />
      <Footer/>
    </>
  )
}

export default App
