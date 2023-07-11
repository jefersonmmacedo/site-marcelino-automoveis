import "./exploreIconsProperties.css";
import {FaHome, FaBuilding, FaStore, FaTractor, FaCar, FaMotorcycle, FaBus, FaTruck} from "react-icons/fa";
import {IoBusiness, IoArrowForward} from "react-icons/io5";


export function ExploreIconsProperties() {
    return (
        <div className="ExploreIconsProperties">
            <div className="mainExplorer">
            <div className="textExplore">
                <h2>Explore mais categorias</h2>
                <h4>Veja os tipos de autos mais procurados</h4>

                <a href="/imoveis/all">+ 1.500 imóveis <IoArrowForward /> </a>
            </div>

            <div className="iconsExplore">
                <div className="IconUnicExplore">
                    <FaCar />
                    <h5>Carros</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaMotorcycle />
                    <h5>Motos</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaTruck />
                    <h5>Caminhões</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaBus />
                    <h5>Ônibus</h5>
                </div>
                <div className="IconUnicExplore">
                    <FaTractor />
                    <h5>Tratores</h5>
                </div>
            </div>
            </div>

        </div>
    )
}