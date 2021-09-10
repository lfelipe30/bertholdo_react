import { Container } from "react-bootstrap";
import "../../styles/NavBar/navbar.css";
import MenuSuperior from "./MenuSuperior/MenuSuperior";
import MenuInferior from "./MenuInferior/MenuInferior";

const NavBar = () => {
   return (
      <div className="navbarBackground">
         <Container>
            <MenuSuperior />
            <MenuInferior />
         </Container>
      </div>
      // <div className="menu">
      //    <div className="topo">
      //       <a>Entre em contato conosco</a>
      //       <a className="telefone">(31) 3333-3333</a>
      //       <a>*</a>
      //       <a className="telefone">(31) 9933-3333</a>
      //       <a>*</a>
      //       <a className="email">comercial@comercial.com.br</a>
      //    </div>
      //    <div className="nav">
      //       <div className="logo">LOGOTIPO</div>
      //       <a>QUEM SOMOS</a>
      //       <a>
      //          <select className="formselect" disabled>
      //             <option>GÔNDOLAS</option>
      //          </select>
      //       </a>
      //       <a>
      //          <select className="formselect" disabled>
      //             <option>MOVEIS DE AÇO</option>
      //          </select>
      //       </a>
      //       <a>ARMAZENAGEM</a>
      //       <a>CONTATO</a>
      //       <a></a>
      //    </div>
      // </div>
   );
};

export default NavBar;
