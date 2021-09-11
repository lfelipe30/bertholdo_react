import '../../styles/Cadastro/cadastro.css'
import Formulario from './Formulario'

const Cadastro = () => {
   return (
     <div className="cadastro">

            <div className="texto">
                <p>SEJA UM REVENDEDOR E OBTENHA GRANDES LUCROS EM SUAS VENDAS !</p>
                <p>Cadastre-se usando o formulario</p>
            </div>

            <div className="form">
                <Formulario />
            </div>

      </div>
   );
};

export default Cadastro;