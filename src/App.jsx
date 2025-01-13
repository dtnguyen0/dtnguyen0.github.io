{/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/}
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Profile from './Profile/Profile.jsx'
import About from './About/About.jsx'
import Experience from './Experience/Experience.jsx'
import Projects from './Projects/Projects.jsx'

function App() {

  return (
    <>
      <Header />
      <Profile />
      <div className="info">
        <About />
        <Experience />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
