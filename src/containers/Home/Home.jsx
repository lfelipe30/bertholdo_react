import HeroSection from "../../components/HeroSection/HeroSection";
import Produtos from "../../components/Produtos/Produtos";
import { Container } from "react-bootstrap";
import Orcamento from '../../components/Orcamento/Orcamento'
import Cadastro from '../../components/Cadastro/Cadastro'
import FooterSuperior from '../../components/Footer/FooterSuperior'

const Home = () => {
   return (
      <> 
         <HeroSection />
         <Container>
            <Produtos />
            <Orcamento />
            <Cadastro />
            <FooterSuperior />
         </Container>
      </>
   );
};

export default Home;

