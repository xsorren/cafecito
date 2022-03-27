import background from '../img/banner.jpg'
import Nav from './Nav';

const Header = () => {
    return (
            <header className="header" style={{ backgroundImage: `url(${background})`}}>
            <div className="contenedor">
                <div className="barra">
                    <a className="logo">
                        <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                    </a>
                    <Nav />
                </div>
            </div>

            <div className="header__texto">
                <h2>Blog de café con consejos y cursos</h2>
                <p>Aprende de los expertos con las mejores recetas y consejos</p>
            </div>
            <div className="swipe">
                <p><span>Deslizá ⤵</span></p>
            </div>
        </header>
      );
}
 
export default Header