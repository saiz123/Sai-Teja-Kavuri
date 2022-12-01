import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Expirence from './components/experience/Expirence'
import Contact from './components/contact/Contact'
// import Protfolio from './components/protfolio/Protfolio'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Expirence/>
        {/* <Protfolio/> */}
        <Contact/>
        <Footer/>




    </>
  )
}

export default App