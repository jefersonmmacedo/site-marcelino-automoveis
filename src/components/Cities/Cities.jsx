import "./cities.css"
import Rio from "../../assets/images/Rio.jpg";
import Bahia from "../../assets/images/Bahia.jpg";
import Minas from "../../assets/images/Minas.jpg";
import SaoPaulo from "../../assets/images/SaoPaulo.jpg";

export function Cities() {
    return (
        <div className="Cities">
            <h2>Cidades com mais ofertas</h2>
            <h4>Os melhores autos nas melhores localizações</h4>
            <div className="blocks">
                <div className="block1">
                    <div className="city">
                        <h4>Rio de Janeiro</h4>
                        <h5>450 Autos</h5>
                    </div>
                    <img src={Rio} alt="" />
                </div>
                <div className="block2">
                <div className="city">
                        <h4>Belo Horizonte</h4>
                        <h5>450 Autos</h5>
                    </div>
                    <img src={Minas} alt="" />
                </div>
            </div>
            <div className="blocks2">
            <div className="block1">
            <div className="city">
                        <h4>São Paulo</h4>
                        <h5>450 Autos</h5>
                    </div>
                    <img src={SaoPaulo} alt="" />
                </div>
                <div className="block2">
                <div className="city">
                        <h4>Salvador</h4>
                        <h5>450 Autos</h5>
                    </div>
                    <img src={Bahia} alt="" />
                </div>
            </div>
        </div>
    )
}