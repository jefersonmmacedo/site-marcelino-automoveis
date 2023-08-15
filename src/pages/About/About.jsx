import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import Image1 from '../../assets/images/background10.jpg'
import Image2 from '../../assets/images/background12.jpg'
import {FiCheckCircle} from "react-icons/fi"
import "./about.css";
import { useEffect } from "react";
import api from "../../services/api";
import { useState } from "react";
import Navbar from "../../components/NavBarTop/Navbar";
import { FooterSlim } from "../../components/FooterSlim/FooterSlim";


export function About() {

    return (
        <div className="About">
            <Navbar />
            <div className="topImageAbout">
                <div className="back">
            <h1>Marcelino Automóveis</h1>
                <h3>Conheça mais sobre serviços e atuações.</h3>
                </div>
            </div>

            <div className="aboutInfos">
                <div className="ImagesAbout">
                    <div className="imageAbout1">
                        <img src={Image1} alt="" />
                    </div>
                   
                </div>
                <div className="TextAboutInfo">
                    <h2>O que nos move</h2>
                    <h5>Oferecemos aos nossos clientes um atendimento diferenciado, veículos com garantia, procedência e serviços que garantem maior comodidade a fim de que a compra de seu veículo seja feita com total segurança e agilidade.</h5>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                                <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossa missão</h4>
                                <h5>Entregar o melhor atendimento e acompanhamento no processo de compra de veículos de nossos clientes. Com transparência, seriedade e respeito</h5>
                                </div>
                        </div>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                            <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossa visão</h4>
                                <h5>Ser uma empresa de referência na região na venda de autos, que contribua para o realização constante dos sonhos de nossos clientes.</h5>
                                </div>
                        </div>
                        <div className="BlockInfosAbout">
                            <div className="svgInfo">
                            <FiCheckCircle />
                            </div>
                            <div className="BlockInfosText">
                                <h4>Nossos valores</h4>
                                <h5>Ser ética com seus parceiros e clientes, respeitando as normas e os contratos pré-estabelecidos.</h5>
                                </div>
                        </div>
                </div>
            </div>



                <FooterSlim />
        </div>
    )
}