
import cafe from '../img/cafecito.png'
const Curso = ({ titulo, precio, cupo }) => {
    return (
        <div className="centrar-texto">
        <li className="widget-curso">
        <h4 style={{marginBottom: 25, marginTop: 25}} className="centrar-texto">{titulo}</h4>
        <div className='info'>
        <p style={{paddingLeft : 20, paddingRight : 20, margin: 0}} className="widget-curso__label">Precio: 
            <span className="widget-curso__info">{" " + precio}</span>
        </p>
        <p style={{paddingLeft : 20, paddingRight : 20, margin: 0}} className="widget-curso__label">Cupo: 
            <span className="widget-curso__info">{" " + cupo}</span>
        </p>
        </div>
        <a style={{marginLeft: 50, marginRight: 50}} href="entrada.html" className="boton boton--secundario">Más Información sobre nuestros cursos</a>
        </li>
        </div>
      );
}
const Cursos = () => {
    return (
    <div className="contenido-principal">
        <section>
            <h3 className="centrar-texto">Nuestros Cursos y Talleres</h3>

            <ul className="cursos no-padding">
                <Curso titulo="Técnicas de Extracción de Café" precio="Gratis" cupo="20"/>
                <img src={cafe} width="350px" height="350px" />
                <Curso titulo="4 Recetas de Café para Principiantes" precio="$5" cupo="10" />
            </ul>
        </section>
    </div>
      );
}
 
export default Cursos;
