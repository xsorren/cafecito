import Entrada from "../Entrada.js";
import Cursos from "../Cursos.js";
import {BrowserRouter as Router, Link} from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <Router>
        <nav className='navegacion'>
            <Link to="/Nosotros" className="navegacion__enlace">Nosotros</Link>
            <Link to="/Cursos" className="navegacion__enlace">Cursos</Link>
            <a className="navegacion__enlace">Contacto</a>
        </nav>
        </Router>
        </>
        
      );
}

 
export default Nav;