import './footer.css';
import Logo from '../switchLogo/switchLogo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faSquareInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Footer({ isChecked }) {
    return (
    <footer className="footer">
        <div className="container-footer">
            <div className="logo-footer">
            <Logo isDarkTheme={isChecked} id="logo" className="logo" alt="logo" />
            </div>
            <div className="content-footer">
                <div className="info-footer">
                    <h1>Informações</h1>
                    <a><p>Sobre-nos</p></a>
                    <a><p>Politica de Privacidade</p></a>
                    <a><p>FAQ</p></a>
                </div>
                <div className="info-footer">
                    <h1>Conta</h1>
                    <a ><p>Perfil</p></a>
                    <a ><p>Posts</p></a>
                    <a ><p>Serviços</p></a>
                </div>
                <div className="info-footer">
                    <h1>Contate-nos</h1>
                    <a><p>Fale conosco</p></a>
                    <a><p>freela@flex.com</p></a>
                </div>
            </div>
            <div className="rede-footer">
                <FontAwesomeIcon icon={faGithub} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faSquareInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
        
        <p className="direct-footer">
            FreelaFlex &copy; 2024 | FreelaFlex - Todos direitos reservados.
        </p>
    </footer>
    );
}