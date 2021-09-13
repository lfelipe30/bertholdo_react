import '../../styles/Cadastro/cadastro.css'
import Formulario from './Formulario'

const Cadastro = () => {
   return (

     <div className="cadastro">
       <div className="container">
            <div className="texto">
                <p><strong>SEJA UM REVENDEDOR E <span>OBTENHA GRANDES LUCROS</span> EM SUAS VENDAS !</strong></p>
                <p>Cadastre-se usando o formulario</p>
            </div>

            <div className="form">
                <Formulario />
            </div>

       </div>
      </div>
   );
};

export default Cadastro;