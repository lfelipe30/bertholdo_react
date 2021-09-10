import { NavDropdown } from "react-bootstrap";
import "../../../styles/NavBar/MenuInferior/menuInferior.css";
import { BsSearch } from "react-icons/bs";

const MenuInferior = () => {
   return (
      <div className="menuInferiorDivPai">
         <h1>Logotipo</h1>
         <a href="/">Quem somos</a>
         <NavDropdown title="Gondolas" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Dropdown 1</NavDropdown.Item>
            <NavDropdown.Item href="/">Dropdown 2</NavDropdown.Item>
         </NavDropdown>
         <NavDropdown title="Moveis de Aco" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Dropdown 1</NavDropdown.Item>
            <NavDropdown.Item href="/">Dropdown 2</NavDropdown.Item>
         </NavDropdown>
         <NavDropdown title="Armazenagem" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Dropdown 1</NavDropdown.Item>
            <NavDropdown.Item href="/">Dropdown 2</NavDropdown.Item>
         </NavDropdown>
         <a href="/">Contato</a>
         <a href="/">
            <BsSearch />
         </a>
      </div>
   );
};

export default MenuInferior;
