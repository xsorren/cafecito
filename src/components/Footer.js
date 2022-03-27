const Footer = () => {
    return (
            <footer className="footer">
        <div className="contenedor">
            <div className="barra">
                <a className="logo">
                    <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                </a>

                <nav className="navegacion">
                    <a className="navegacion__enlace">Nosotros</a>
                    <a className="navegacion__enlace">Cursos</a>
                </nav>
            </div>
        </div>
    </footer>
      );
}
 
export default Footer;