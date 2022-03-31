import Footer from "./components/Footer";
import Img1 from "./img/curso1.jpg"
import Img2 from "./img/curso2.jpg"
import Img3 from "./img/curso3.jpg"

const CursosAll = () => {
    return (
        <>
        <main className="contenedor">
        <h3 className="centrar-texto">Nuestros Próximos Cursos y Talleres</h3>

        <div className="curso">
            <div className="curso__imagen">
                <img src={Img1} alt="Imagen del curso" />
            </div>
            <div className="curso__informacion">
                <h4 className="no-margin">Técnicas de extracción de café</h4>
                <p className="curso__label">Precio: 
                    <span className="curso__info">Gratis</span>
                </p>
                <p className="curso__label">Cupo: 
                    <span className="curso__info"> 20</span>
                </p>
                <p className="curso__descripcion">
                    Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.
                </p>
            </div>
        </div>

        <div className="curso">
            <div className="curso__imagen">
                <img src={Img2} alt="Imagen del curso" />
            </div>
            <div className="curso__informacion">
                <h4 className="no-margin">Taller para Tostar y Moler Granos</h4>
                <p className="curso__label">Precio: 
                    <span className="curso__info">Gratis</span>
                </p>
                <p className="curso__label">Cupo: 
                    <span className="curso__info">20</span>
                </p>
                <p className="curso__descripcion">
                    Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.
                </p>
            </div> 
        </div> 

        <div className="curso">
            <div className="curso__imagen">
                <img src={Img3} alt="Imagen del curso" />
            </div>
            <div className="curso__informacion">
                <h4 className="no-margin">4 Recetas de Café para Principiantes</h4>
                <p className="curso__label">Precio: 
                    <span className="curso__info">Gratis</span>
                </p>
                <p className="curso__label">Cupo: 
                    <span className="curso__info">20</span>
                </p>
                <p className="curso__descripcion">
                    Donec tempor, nisl et rhoncus viverra, turpis enim convallis ligula, non hendrerit nulla tortor nec odio. Morbi non mattis nunc, elementum auctor arcu. Aliquam vestibulum arcu non sem porta auctor. Nam vel congue ligula, eu condimentum felis. Nunc aliquam hendrerit odio sit amet venenatis. Nunc varius, libero a tempor rutrum, nulla risus congue velit, nec suscipit nibh lectus ac dolor. Nulla facilisi.
                </p>
            </div> 
        </div> 

        
    </main>
    <Footer />
    </>
      );
}
 
export default CursosAll;