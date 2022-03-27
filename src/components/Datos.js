import Blog3 from '../img/blog3.jpg'
import Blog2 from '../img/blog2.jpg'
import Blog1 from '../img/blog1.jpg'

const Dato = ( { imagen }) => {
    return (
        <article className="entrada">
        <div className="entrada__imagen">
            <picture>
                <img loading="lazy" src={imagen} alt="imagen blog" /> 
            </picture>
        </div>
    
        <div>
            <h4 style={{paddingLeft : 10, paddingRight : 10, marginBottom: 10, marginTop : 0}}>Tipos de Grano de Café</h4>
            <p style={{paddingLeft : 10, paddingRight : 10, margin: 0, paddingBottom: 10}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, rerum, reprehenderit consequatur perferendis officia, vitae fuga animi temporibus itaque atque reiciendis ea excepturi! Molestias aperiam fugiat deleniti laudantium atque numquam?</p>
            <a className="boton boton--primario">Leer Entrada</a>
        </div>
    </article>
      );
}
 


const Datos = () => {
    return (
        <div className="datos">

            <h3 className='centrar-texto'>Nuestro Blog</h3>
                <Dato imagen={Blog1}/>
                <Dato imagen={Blog2}/>
                <Dato imagen={Blog3}/>

        </div>
      );
}
 
export default Datos         