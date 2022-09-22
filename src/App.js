import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./components/About/About"
import Login from "./components/Amin/Login/Login"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
