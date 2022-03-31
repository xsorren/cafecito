import { useNavigate } from 'react-router-dom';
const Footer = () => {
    let navigate = useNavigate();
    return (
            <footer className="footer">
        <div className="contenedor">
            <div className="barra">
                <a className="logo">
                    <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                </a>

                <nav className="navegacion">
                <a onClick={() => navigate("/Nosotros")} className="navegacion__enlace">Nosotros</a> 
                <a onClick={() => navigate("/Cursos")} className="navegacion__enlace">Cursos</a>
                </nav>
            </div>
        </div>
    </footer>
      );
}
 
export default Footer;