import {Carousel} from "react-bootstrap";
import '../../../styles/Carousel/heroSection.css'


const Slider = () => {
   return (
<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://ogimg.infoglobo.com.br/in/25191445-b35-463/FT1086A/x51440249114_4f33de539e_c.jpg.pagespeed.ic.EXaa8Lm7uW.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s2.glbimg.com/r8_TxJLdYvDGszx425cJMPogjSM=/0x0:2690x1793/640x360/smart/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/e/3/WIpbJkSi2TJaB0saqA1A/6110362ce3064f42e312674f6a5c20d1e28844e8.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="data:image/jpeg;base64,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"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   );
};

export default Slider;