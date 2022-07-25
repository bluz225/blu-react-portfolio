import HomePage from "./components/pages/HomePage"
import Navbar from "./components/Navbar"
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

function App() {
  
  // vh for the navbar
  let NavBarVH = 10

  // Do not change!
  let PageVH = 100 - NavBarVH

  NavBarVH = NavBarVH.toString()
  PageVH = PageVH.toString()
  console.log(typeof NavBarVH)
  // console.log(NavBarVH)

  return (
    <Router>
      <Navbar 
        NavBarVH={NavBarVH}
      />
      <Routes>
        <Route
          path="/"
          element={<HomePage
            PageVH={PageVH}
          />} />
        <Route
          path="/about"
          element={<About
            PageVH={PageVH}
          />} />
        <Route
          path="/projects"
          element={<Projects
            PageVH={PageVH}
          />} />
      </Routes>
    </Router>
  );
}

export default App;
