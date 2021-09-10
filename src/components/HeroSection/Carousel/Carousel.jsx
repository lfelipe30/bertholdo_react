import {Carousel} from "react-bootstrap";
import '../../../styles/Carousel/heroSection.css'
import Button from 'react-bootstrap/Button'


const Slider = () => {
   return (
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/31/ae/54/31ae54f0dac0fdaa8a55fb7078285f53.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <div>
          <h5>Produto direto da fabrica !</h5>
        <p>
          Somos especialistas em gôndolas, porta pallets, racks,
          roupeiros, estantes, e mais diversos outros itens para
          organizar o armazenamento de produtos
        </p>
        <p>
          Solicite seu orçamento agora e monte sua loja com quem entende de aço !
        </p>
        <Button variant="dark"><strong>preencha seus dados</strong></Button>
      </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/31/ae/54/31ae54f0dac0fdaa8a55fb7078285f53.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Produto direto da fabrica !</h5>
      <p>
          Somos especialistas em gôndolas, porta pallets, racks,
          roupeiros, estantes, e mais diversos outros itens para
          organizar o armazenamento de produtos
      </p>
      <p>
          Solicite seu orçamento agora e monte sua loja com quem entende de aço !
      </p>
       <Button variant="dark"><strong>preencha seus dados</strong></Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.pinimg.com/originals/31/ae/54/31ae54f0dac0fdaa8a55fb7078285f53.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Produto direto da fabrica !</h5>
      <p>
          Somos especialistas em gôndolas, porta pallets, racks,
          roupeiros, estantes, e mais diversos outros itens para
          organizar o armazenamento de produtos
      </p>
      <p>
          Solicite seu orçamento agora e monte sua loja com quem entende de aço !
      </p>
       <Button variant="dark"><strong>preencha seus dados</strong></Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   );
};

export default Slider;