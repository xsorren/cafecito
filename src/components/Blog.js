import Blog3 from '../img/blog3.jpg'
import Blog2 from '../img/blog2.jpg'
import Blog1 from '../img/blog1.jpg'

const Dato = ( { imagen, titulo }) => {
    return (
        <article style={{marginLeft: 20, marginRight: 20}}className="entrada">
        <div className="entrada__imagen">
            <picture>
                <img loading="lazy" src={imagen} alt="imagen blog" /> 
            </picture>
        </div>
    
        <div>
            <h4 style={{paddingLeft : 10, paddingRight : 10, marginBottom: 10, marginTop : 0}}>{titulo}</h4>
            <p style={{paddingLeft : 10, paddingRight : 10, margin: 0, paddingBottom: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?</p>
            <div style={{paddingLeft: 10}}>
                <a className="boton boton--primario">Leer Entrada</a>
            </div>
        </div>
    </article>
      );
}
 


const Blog = () => {
    return (
        <>
            <h3 className='centrar-texto'>Nuestro Blog</h3>
            <div className="datos">
                <Dato titulo="3 Deliciosas Recetas de Café" imagen={Blog1}/>
                <Dato titulo="Beneficios del Café" imagen={Blog2}/>
                <Dato titulo="Tipos de Grano de Café" imagen={Blog3}/>
        
            </div>
        </>
      );
}
 
export default Blog         