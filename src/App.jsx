import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Quality from "./pages/Quality"
import Gallery from "./pages/Gallery"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="quality" element={<Quality />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
