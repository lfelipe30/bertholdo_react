import { Container } from "react-bootstrap";
import Cards from "./Cards/Cards";
import Slider from "./Carousel/Carousel"

const HeroSection = () => {
   return (                  
      <>
         <Container>
            <Slider />
            <Cards />
         </Container>
      </>
    
   );
};

export default HeroSection;
