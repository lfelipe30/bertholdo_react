import { Container } from "react-bootstrap";
import "../../styles/NavBar/navbar.css";
import MenuSuperior from "./MenuSuperior/MenuSuperior";
import MenuInferior from "./MenuInferior/MenuInferior";

const NavBar = () => {
   return (
      <div className="navbarBackground">
         <MenuSuperior />
         <Container>
            <MenuInferior />
         </Container>
      </div>
   );
};

export default NavBar;
