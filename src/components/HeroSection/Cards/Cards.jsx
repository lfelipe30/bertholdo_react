import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import '../../../styles/Cards/cards.css'


const Cards = () => {
   return (
      <div className="cardsContainer">
      <Container>
         <Row>
            <Col>
               <p>Quer ser um colaborador ou um representante?</p>
               <Button variant="dark">preencha seus dados</Button>
            </Col>
            <Col>
               <p>Quer ser um colaborador ou um representante?</p>
               <Button variant="dark">preencha seus dados</Button>
            </Col>
            <Col>
               <p>Quer ser um colaborador ou um representante?</p>
               <Button variant="dark">preencha seus dados</Button>
            </Col>
            <Col>
               <p>Quer ser um colaborador ou um representante?</p>
               <Button variant="dark">preencha seus dados</Button>
            </Col>
         </Row>
      </Container>
      </div>
   );
};

export default Cards;
