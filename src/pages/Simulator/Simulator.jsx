import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import bv from "../../assets/images/financiamento/bv.png";
import santander from "../../assets/images/financiamento/santander.png";
import itau from "../../assets/images/financiamento/itau.png";
import bradesco from "../../assets/images/financiamento/bradesco.png";
import brasil from "../../assets/images/financiamento/brasil.png";
import porto from "../../assets/images/financiamento/porto.png";
import "./simulator.css";
import {FiDollarSign} from "react-icons/fi";
import {IoCalculatorOutline, IoCalendarOutline, IoPeopleOutline, IoBusinessOutline, IoWalletOutline, IoCarSportOutline, IoRepeatOutline, IoCalendarNumberOutline} from "react-icons/io5";

export function Simulator() {
    return (
        <div className="Simulator">
            <Navbar2 />
            <div className="topImageSimulator">
                <div className="back">
            <h1>Nós temos o auto dos seus sonhos!</h1>
                <h3>E também as melhores oções de financiamento.</h3>
                </div>
            </div>

            <div className="financer">
            <h2>Porque <span>financiar</span> um auto?</h2>
                <h4>Veja 6 vantagens de realizar um financiamento.</h4>

                <div className="benefits">
                    <div className="benefitUnic">
                        <IoCarSportOutline/>
                         <div className="text">
                        <h5>Você sai com o auto assim que fecha o contrato.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <FiDollarSign/>
                         <div className="text">
                        <h5>As parcelas são fixas e definidas por você no momento da contratação.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoCalendarNumberOutline/>
                         <div className="text">
                        <h5>É você quem escolhe a duração do seu contrato!</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoCalendarOutline/>
                         <div className="text">
                        <h5>Você pode antecipar as parcelas para pagar menos.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoBusinessOutline/>
                         <div className="text">
                        <h5>Você pode financiar autos novos ou usados, vendidos por uma agência.</h5>
                        </div>
                    </div>
                    <div className="benefitUnic">
                        <IoRepeatOutline/>
                        <div className="text">
                        <h5>Você pode trocar de carro mesmo sem terminar de pagar o financiamento </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="stepesFinances">
                            <h2>5 passos do <span>financiamento</span></h2>
                <h4>Conheça cada etapa do processo de financiamento imobiliário.</h4>

                <div className="stepesList">
                <div className="stepeUnic">
                    <h1>1</h1>
                    <div className="textStepe">
                        <h4>Peça o seu financiamento </h4>
                        <h5>Entre em contato com a agência desejada com o auto de sua escolha e solicite um financiamento.</h5>

                        
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Envio de documentação</h4>
                        <h5>Envie a documentação necessária solicitada pela agência selecionada</h5>
                    </div>
                    <h1>2</h1>
                </div>
                <div className="stepeUnic">
                    <h1>3</h1>
                    <div className="textStepe">
                        <h4>Análise de documentos</h4>
                        <h5>O pedido é enviado junto a documentação e é análisado junto a instituição financeira selecionada.</h5>
                    </div>
                </div>
                <div className="stepeUnic2">
                    <div className="textStepe2">
                        <h4>Contrato</h4>
                        <h5>Assim que o financeiro é aprovado, são acertados os últimos detalhes do contrato para a assinatura.</h5>
                    </div>
                    <h1>4</h1>
                </div>
                <div className="stepeUnic">
                    <h1>5</h1>
                    <div className="textStepe">
                        <h4>Receba seu auto</h4>
                        <h5>Com tudo acertado, o valor é liberado pela instituição financeira e você já poderá sair com seu auto.</h5>
                    </div>
                </div>
                </div>
            </div>
             
             <div className="bank">
                <div className="back2">
                <h2>Escolha um banco para a simulação</h2>
                <h4>Estamos trabalhando para trazer as simulações direto em nosso site.</h4>
                <div className="logosBank">
                    <a href="https://www.bv.com.br/simular?gclid=Cj0KCQjwnf-kBhCnARIsAFlg493jhIc8ZoUhy2nX2GM5CbTxbwSXk7Gogv48tpF6UMOoFlegkhak8qcaAoQIEALw_wcB#/veiculo?idcmp=T01%7CC04%7CV03%7CF08%7CP206%7CP%7C567370709703%7Cbv_financeira%7Cfv_midia_google_conversao_branding_search_062021" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={bv} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://financeiraportoseguro.com.br/auto/" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={porto} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.cliente.santanderfinanciamentos.com.br/originacaocliente/?ori=SF&int_source=pagina-C2C&mathts=paid&_ga=2.56788394.1229877082.1688260105-1101877022.1688260105&_gac=1.225309288.1688260105.Cj0KCQjwnf-kBhCnARIsAFlg493psD5CpM0ITVIezaYXNoUg7ii5xcXtyN5h5d0oEmn8mCFloQK6Wh4aAukGEALw_wcB#/dados-pessoais" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={santander} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.itau.com.br/emprestimos-financiamentos/veiculos/simulacao/" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={itau} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://banco.bradesco/html/classic/produtos-servicos/emprestimo-e-financiamento/financiamento-veiculos.shtm" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={bradesco} alt="" className="imageBank"/>
                    </div>
                    </a>
                    <a href="https://www.bb.com.br/site/pra-voce/financiamentos/financiamento-de-carro/" target="_blank" rel="noreferrer">
                    <div className="logoUnicBank">
                        <img src={brasil} alt="" className="imageBank"/>
                    </div>
                    </a>
                </div>

                <h6>*Não somos responáveis pelas informações solicitadas e informadas pelos sites acima. Apenas disponibilizamos os links dos sites para que nossos clientem tenham acesso a várias opções de simulação de financiamento</h6>
               
                </div>
                </div>
                <Footer />
        </div>
    )
}