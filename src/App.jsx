import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router basename="/mohammed-abi-portfolio">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Service />
              <Projects />
              <Contact />
            </>
          }
        />

        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
