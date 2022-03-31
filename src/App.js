import Home from "./Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Entrada from "./Entrada";
import CursosAll from "./CursosAll";

const App = () => {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Cursos' element={<CursosAll />} />
      <Route path='/Nosotros' element={<Entrada />} />
      </Routes>
    </Router>


    </>
  );
}

export default App;
