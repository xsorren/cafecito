import Img1 from "./img/curso1.jpg"
import Img2 from "./img/curso2.jpg"
import Img3 from "./img/curso3.jpg"
import { useNavigate } from 'react-router-dom';

const Cursito = ( { imagen, titulo, precio, cupo }) => {
    return (
        <>
        <article style={{marginLeft: 20, marginRight: 20, borderBottom: 'none'}}className="entrada">
        <div className="entrada__imagen">
            <picture>
                <img loading="lazy" src={imagen} alt="imagen blog" /> 
            </picture>
        </div>
        <div className="centrar-texto">
        <li className="widget-curso" style={{marginTop: 5}}>
        <h4 style={{marginBottom: 25, marginTop: 25}} className="centrar-texto">{titulo}</h4>
        <div className='info'>
        <p style={{paddingLeft : 20, paddingRight : 20, margin: 0}} className="widget-curso__label">Precio: 
            <span className="widget-curso__info">{" " + precio}</span>
        </p>
        <p style={{paddingLeft : 20, paddingRight : 20, margin: 0}} className="widget-curso__label">Cupo: 
            <span className="widget-curso__info">{" " + cupo}</span>
        </p>
        </div>
        <a style={{display: 'block', marginLeft: 50, marginRight: 50}} className="boton boton--secundario">Inscribirse</a>
        </li>
        </div>
        </article>
        </>
      );
}
const CursosAll = () => {
    let navigate = useNavigate();
    return (
        <>
        <div className="contenedor">
        <h3 class="centrar-texto">Nuestros Próximos Cursos y Talleres</h3>
        <div class="datos">
        <ul className="cursos no-padding">
        <Cursito titulo="Técnicas de extracción de café" precio="$15" cupo="7" imagen={Img1}/>
        <Cursito titulo="Aprende a Moler Granos" precio="$10" cupo="13" imagen={Img2}/>
        <Cursito titulo="Las Mejores Recetas de Café" precio="$25" cupo="4" imagen={Img3}/>
        </ul>
        </div>
        </div>

        

    <footer style={{marginTop: '2rem'}} className="footer">
        <div className="contenedor">
            <div className="barra">
                <a className="logo" onClick={() => navigate("/")}>
                    <h1 className="logo__nombre no-margin centrar-texto">Blog<span className="logo__bold">DeCafé</span></h1>
                </a>
                <nav className="navegacion">
                    <a onClick={() => navigate("/Nosotros")} className="navegacion__enlace">Nosotros</a> 
                    <a onClick={() => navigate("/")} className="navegacion__enlace">Inicio</a>
                </nav>
            </div>
        </div>
    </footer>
    </>
      );
}
 
export default CursosAll;