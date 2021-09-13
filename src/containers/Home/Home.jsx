import HeroSection from "../../components/HeroSection/HeroSection";
import Produtos from "../../components/Produtos/Produtos"
import { Container } from "react-bootstrap"
import Orcamento from '../../components/Orcamento/Orcamento'
import Cadastro from '../../components/Cadastro/Cadastro'
import FooterLogo  from '../../components/Footer/FooterLogo'
import FooterSuperior from '../../components/Footer/FutterSuperior'
import NavBar from "../../components/NavBar/NavBar"
import Rodape from '../../components/Footer/Rodape'

const Home = () => {
   return (
     <>
            <NavBar />
            <HeroSection />
         <Container>
            <Produtos />
            <Orcamento />
            <Cadastro />
            <FooterLogo />
            <FooterSuperior />
            <Rodape />
         </Container>
      </>
 
   );
};

export default Home

