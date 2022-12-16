import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './componentes/layout/Footer'
import Navbar from './componentes/layout/NavBar'
import Container from './componentes/layout/Container'
import Home from './componentes/pages/Home'
import Projects from './componentes/pages/Projects'
import NewProject from './componentes/pages/NewProject'
import Contact from './componentes/pages/Contact'
import Project from './componentes/pages/Project'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
      </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
