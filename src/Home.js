import Header from './components/Header';
import Cursos from './components/Cursos';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import Blog from './components/Blog';

const Home = () => {
    return (
        <>
            <Header />
            <Blog />
            <Cursos />
            <Contacto />
            <Footer />
        </>
      );
}
 
export default Home;