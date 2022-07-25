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
  return (
    <Router>
      <Navbar/>
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
      <Footer/>
    </Router>
  );
}

export default App;
