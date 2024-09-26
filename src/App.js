
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

// Layout
import Layout from "./Layout";

// pages
import Home from "./pages/Home";
import About from "./Components/About";
import OurTeam from './Components/OurTeam';
import BmiCalculator from './Components/BmiCalculator';
import Contact from './Components/Contact';
import Recipe from './Components/Recipe';




const App = () => {
  return (
    <Router>
    <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/bmi-calculator" element={<BmiCalculator/>} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recipe" element={<Recipe />} />
          
          </Route>
        </Routes>
        </Router>
  );
};

export default App;