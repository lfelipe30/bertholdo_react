import '../../styles/Orcamento/orcamento.css'
import Button from 'react-bootstrap/Button'

const Orcamento = () => {
   return (
     <div className="orcamento">
            <div className="imageOrcamento">
                <img
                    src="https://i0.wp.com/multarte.com.br/wp-content/uploads/2018/10/whatsapp_logo_png_transparente.png?fit=1280%2C1067&ssl=1"
                    alt="First slide"
                />
            </div>

            <div className="detalheOrcamento">
                <h1><strong>SOLICITE SE ORÇAMENTO PELO WHATSAPP</strong></h1>
                <p>vendas exclusivas para logistas</p>
                  <Button variant="success">Converse com a gente</Button>
            </div>
      </div>
   );
};

export default Orcamento;