import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'
import Profile from './Profile/Profile.jsx'
import About from './About/About.jsx'
import Experiences from './Experiences/Experiences.jsx'
import Projects from './Projects/Projects.jsx'

function App() {

  return (
    <>
      <Header />
      <Profile />
      <div className="info">
        <About />
        <Experiences />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
