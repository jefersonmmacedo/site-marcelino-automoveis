import "./fipe.css";
import {FaHandshake} from "react-icons/fa"
import {IoDesktopOutline} from "react-icons/io5"

export function Fipe() {
    return (
        <div className="Fipe">
            <div className="simulation">
            <IoDesktopOutline />
            <h2>Deseja financiar?</h2>
            <h4> Simule um valor de entrada e descubra quanto vão custar as parcelas do seu próximo veículo.</h4>
            <a href="/financiamento">Faça uma simulação</a>
            </div>
            <div className="fipeValue">
            <FaHandshake />
            <h2>Comprar ou vender?</h2>
            <h4> Avalie seu veículo, saiba quanto vale na tabela fipe e consiga o melhor preço na negociação!</h4>
            <a href="/sobre">Anuncie com a gente</a>
            </div>
        </div>
    )
}