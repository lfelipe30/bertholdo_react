import "../../../styles/NavBar/MenuSuperior/menuSuperior.css";
import { BsArrowRightShort } from "react-icons/bs";

const MenuSuperior = () => {
   return (
         <div className="menuSuperiorDivPai">
            <div className="container">
               <p>
                  Entre em contato conosco <BsArrowRightShort />
               </p>
               <a href="tel:3133333333">(31) 3333-3333</a>
               <span>▪</span>
               <a href="tel:31933333333">(31) 93333-3333</a>
               <span>▪</span>
               <a href="mailto:comercial@comercial.com">comercial@comercial.com</a>
            </div>
         </div>
   );
};

export default MenuSuperior;
