import "./comingSoon.css"
import Logo from "../../assets/images/Logo2.png";

export function ComingSoon() {
    return(
        <div className="ComingSoon">
            <div className="blockComing">
                <div className="logo">
                <img src={Logo} alt="Logo sua chave" />
                </div>
                
                <h1>Encontre carros, motos e outros veículos em poucos cliques!</h1>

                <div className="coming">
                <h4>Lançamento em Julho de 2023</h4>
                </div>
            </div>
        </div>
    )
}