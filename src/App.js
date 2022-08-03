import HomePage from "./components/pages/HomePage"
import Navbar from "./components/Navbar"
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import {useState} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import "./App.css"

function App() {
  const [currentNav, setCurrentNav ] = useState("")
  const footnavBgColor = "#023047"
  return (
    <Router>

      <Navbar
        bgColor={footnavBgColor}
        currentNav={currentNav}
      />
      <main
      className="bg-gradient-to-t from-white via-gray-100 via-gray-200 via-gray-300 to-gray-400"
      >
      <Routes>
        <Route
          path="/"
          element={<HomePage
            setCurrentNav={setCurrentNav}
          />} />
        <Route
          path="/about"
          element={<About 
            setCurrentNav={setCurrentNav}
          />} />
        <Route
          path="/projects"
          element={<Projects 
            setCurrentNav={setCurrentNav}
          />} />
      </Routes>
      </main>

      <Footer/>

    </Router>
  );
}

export default App;
