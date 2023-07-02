
import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components' 
const App = () => {

    return (
    <BrowserRouter>
    <Navbar />
      <div className="relative z-0 bg-primary">
      <Navbar />
        <div className="relative z-0 bg-gradient-to-b from-primary via-primary to-red-950 bg-fixed">
          
          <Hero />
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas /> 
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
