import '../../styles/Footer/footerSuperior.css'
import { AiOutlineInstagram, AiOutlineFacebook, AiFillCaretRight, AiFillPhone, AiOutlineWhatsApp } from "react-icons/ai";


const FooterSuperior = () => {
   return (     
    <div className="footerSuperior">
        <div className="container">  
            <div style={{color:"#6f6d6e"}}>
                <p>QUEM SOMOS</p>
                <p>GÔNDOLAS</p>
                <p>MÓVEIS DE AÇO</p>
                <p>ARMAZENAGEM</p>
                <p>CONTATO</p>
            </div>
            <div className="redesSociais">
                <p style={{color:"#6f6d6e"}}>FAÇA SEU ORÇAMENTO</p>
                <p style={{color:"#6f6d6e"}}>SEJA UM COLABORADOR</p>
                <h6 className="redesSociais"><strong>SIGA-NOS NAS REDES</strong></h6>
                <a  href="https://www.instagram.com/bertholdo.ecommerce/?hl=pt-br"><AiOutlineInstagram /><a  href="https://www.facebook.com/bertholdo.com.br/"><AiOutlineFacebook /></a></a>
            </div>
            <div className="contato">
                <p><strong>LOJA <AiFillCaretRight /> BH (A 5KM DO CENTRO !)</strong></p>
                <p>Av.Professor Mário Werneck, 26 - 2°  andar</p>
                <p>Belo Horizonte - MG, CEP: 30455-610</p>
                <p>comercial@comercial.com.br</p>
                <span className="tel"><AiFillPhone /> (31)3333-3333</span>
                <span className="tel"><AiOutlineWhatsApp /> (31)93333-3333</span>
            </div>
            <div className="contato">
                <p><strong>LOJA <AiFillCaretRight /> BH (A 5KM DO CENTRO !)</strong></p>
                <p>Av.Professor Mário Werneck, 26 - 2°  andar</p>
                <p>Belo Horizonte - MG, CEP: 30455-610</p>
                <p>comercial@comercial.com.br</p>
                <span className="tel"><AiFillPhone /> (31)3333-3333</span>
                <span className="tel"><AiOutlineWhatsApp /> (31)93333-3333</span>
            </div>
        </div>
    </div>  
   )
}

export default FooterSuperior