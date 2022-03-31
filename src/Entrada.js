import ImgNosotros from "./img/nosotros.jpg"
import { useNavigate } from 'react-router-dom';
const Entrada = () => {
    let navigate = useNavigate();
    return (
       <>
        <div className="contenedor">
            <h3 className="centrar-texto">Sobre Nosotros</h3>
            <div className="nosotrosPage">
            <img src={ImgNosotros} alt="imagen del blog" />
            <p>Etiam pulvinar, quam in iaculis viverra, nibh leo tempor sem, vitae bibendum quam neque vel magna. Nunc id maximus elit. Etiam fermentum tristique lacus eu pulvinar. Vivamus scelerisque varius sem. Aliquam sem ante, pretium eget congue a, vehicula ut ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi nec tincidunt odio. Integer vehicula efficitur nisi sed aliquet. Aliquam aliquam finibus placerat. Mauris consectetur, mauris nec hendrerit efficitur, justo augue placerat odio, a condimentum ante metus et elit. Etiam non massa dui. In vitae tortor sed leo egestas posuere non id tortor. Quisque nec gravida dui. Sed vitae massa mollis, porta felis sed, fringilla odio.Maecenas commodo erat ac elit elementum, ac eleifend arcu gravida.</p>
            </div>
        </div>
        <footer className="footerPage">
        <div className="contenedor">
            <div className="barra">
                <a className="logo">
                    <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                </a>

                <nav className="navegacion">
                    <a onClick={() => navigate("/Cursos")} className="navegacion__enlace">Cursos</a> 
                    <a onClick={() => navigate("/")} className="navegacion__enlace">Inicio</a>
                </nav>
            </div>
        </div>
    </footer>
    </>
      );
}
 
export default Entrada;