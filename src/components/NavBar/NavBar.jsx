
import "../../styles/NavBar/navbar.css";
import MenuSuperior from "./MenuSuperior/MenuSuperior";
import MenuInferior from "./MenuInferior/MenuInferior";

const NavBar = () => {
   return (
      <div className="navbarBackground">
         <div className="container">
            <MenuSuperior />
            <MenuInferior />
         </div>
      </div>
   );
};

export default NavBar;
