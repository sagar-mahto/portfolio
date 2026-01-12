
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const Default = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default Default
<Navbar/>
<Home/>
<About/>
<