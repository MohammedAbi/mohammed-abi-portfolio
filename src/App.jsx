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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Service />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/projects/:id"
          element={
            <>
              <Navbar />
              <ProjectDetail />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
