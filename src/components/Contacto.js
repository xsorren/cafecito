import {animateScroll as scroll } from "react-scroll";

const Contacto = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        scroll.scrollToTop();
    };
    return (
    <div id="contacto" className="contenedor">
        <h3 className="centrar-texto">Contacto</h3>

        <div className="contacto-bg"></div>

        <form className="formulario">
            <div className="campo">
                <label className="campo__label" for="nombre">Nombre</label>
                <input 
                    className="campo__field"
                    type="text" 
                    placeholder="Tu Nombre" 
                    id="nombre"
                />
            </div>
            <div className="campo">
                <label style={{marginRight: '2rem'}} className="campo__label" for="nombre">E-mail</label>
                <input
                    className="campo__field"
                    type="text" 
                    placeholder="Tu E-mail" 
                    id="nombre"
                />
            </div>
            <div className="campo">
                <label className="campo__label" for="mensaje">Mensaje</label>
                <textarea 
                    className="campo__field campo__field--textarea"
                    id="mensaje"
                ></textarea>
            </div>

            <div className="enviar">
                <input type="submit" onSubmit={scrollToTop} value="Enviar" className="botonInput boton--primario" />
            </div>
        </form>
    </div>
);
}
 
export default Contacto;