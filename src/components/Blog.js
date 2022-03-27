import Blog1 from '../img/blog1.jpg'
const Curso = ({ titulo, precio, cupo }) => {
    return (
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
      );
}
const Blog = () => {
    return (
    <div className="contenido-principal">
        <aside className="sidebar">
            <h3 style={{marginBottom: 50, marginTop: 25}} className="centrar-texto">Nuestros Cursos y Talleres</h3>

            <ul className="cursos no-padding">
                <Curso titulo="Técnicas de Extracción de Café" precio="Gratis" cupo="20"/>
                <Curso titulo="4 Recetas de Café para Principiantes" precio="$5" cupo="10" />
            </ul>
        </aside>
    </div>
      );
}
 
export default Blog;
