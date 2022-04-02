import background from '../img/banner.jpg'
import { Link, animateScroll as scroll } from "react-scroll";
import { useNavigate } from 'react-router-dom';
  const Header = () => {
      let navigate = useNavigate();
    return (
            <header className="header" style={{ backgroundImage: `url(${background})`}}>
            <div className="contenedor">
                <div className="barra">
                    <a className="logo">
                        <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                    </a>
                    <nav className='navegacion'>
            <a onClick={() => navigate("/Nosotros")} className="navegacion__enlace">Nosotros</a>
            <a onClick={() => navigate("/Cursos")} className="navegacion__enlace">Cursos</a>
            <Link smooth={true}
                    to='contacto'    
                    className="navegacion__enlace">Contacto</Link>
        </nav>
                </div>
            </div>

            <div className="header__texto">
                <h2>Blog de café con consejos y cursos</h2>
                <p>Aprende de los expertos con las mejores recetas y consejos</p>
            </div>
            <div>
                <p className='flecha'>^</p>
                <p className="swipe"><span>Deslizá</span></p>
            </div>
        </header>
      );
}
 
export default Header