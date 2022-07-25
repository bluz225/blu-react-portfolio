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

function App() {
  const bgColor = "ebebeb"
  const footnavBgColor = "003459"
  return (
    <Router>
        <Navbar
        bgColor = {footnavBgColor}
        />
      <div
      className={`bg-[#${bgColor}]`}
      >
        <Routes>
          <Route
            path="/"
            element={<HomePage/>} />
          <Route
            path="/about"
            element={<About/>} />
          <Route
            path="/projects"
            element={<Projects/>} />
        </Routes>
      </div>
      <Footer
      bgColor = {footnavBgColor}
      />
    </Router>
  );
}

export default App;
