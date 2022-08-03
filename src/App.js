import HomePage from "./components/pages/HomePage"
import Navbar from "./components/Navbar"
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import "./App.css"

function App() {
  const bgColor = "#e5e5e5"
  const footnavBgColor = "#eaf4f4"
  return (
    <Router>

      <Navbar
        bgColor={footnavBgColor}
      />

      <Routes>
        <Route
          path="/"
          element={<HomePage
            bgColor={bgColor}
          />} />
        <Route
          path="/about"
          element={<About />} />
        <Route
          path="/projects"
          element={<Projects />} />
      </Routes>

      <Footer
        bgColor={footnavBgColor}
      />

    </Router>
  );
}

export default App;
