import "./brandCarroussel.css";
import volkswagen from "../../assets/images/logos/volkswagen.png";
import fiat from "../../assets/images/logos/fiat.png";
import chevrolet from "../../assets/images/logos/chevrolet.png";
import ford from "../../assets/images/logos/ford.png";
import hondamoto from "../../assets/images/logos/hondamoto.png";
import hyundai from "../../assets/images/logos/hyundai.png";
import toyota from "../../assets/images/logos/toyota.png";
import citroen from "../../assets/images/logos/citroen.png";
import audi from "../../assets/images/logos/audi.png";
import jeep from "../../assets/images/logos/jeep.png";
import bmw from "../../assets/images/logos/bmw.png";
import volvo from "../../assets/images/logos/volvo.png";
import mini from "../../assets/images/logos/mini.png";
import nissan from "../../assets/images/logos/nissan.png";
import peugeot from "../../assets/images/logos/peugeot.png";
import scania from "../../assets/images/logos/scania.png";
import tesla from "../../assets/images/logos/tesla.png";
import honda from "../../assets/images/logos/honda.png";
import kia from "../../assets/images/logos/kia.png";
import suzuki from "../../assets/images/logos/suzuki.png";
import harleyDavidson from "../../assets/images/logos/harley-davidson.png";
import yamaha from "../../assets/images/logos/yamaha.png";
import ducati from "../../assets/images/logos/ducati.png";
import kawasaki from "../../assets/images/logos/kawasaki.png";


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export function BrandCarroussel() {
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 10,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 610,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
    ]

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} autoplay={true} indicators={false} {...properties} responsive={responsiveSettings}>
            <div className="logoBrand">
                    <div className="image">
                    <img src={volkswagen} alt="" />
                    </div>
                </div>
                
            <div className="logoBrand">
                    <div className="image">
                    <img src={fiat} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image2">
                    <img src={suzuki} alt="" />
                    </div>
                </div>
                

            <div className="logoBrand">
                    <div className="image">
                    <img src={ford} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={chevrolet} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={harleyDavidson} alt="" />
                    </div>
                </div>
                

            <div className="logoBrand">
                    <div className="image">
                    <img src={peugeot} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={hyundai} alt="" />
                    </div>
                </div>

            <div className="logoBrand">
                    <div className="image">
                    <img src={hondamoto} alt="" />
                    </div>
                </div>

            <div className="logoBrand">
                    <div className="image">
                    <img src={toyota} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={citroen} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={yamaha} alt="" />
                    </div>
                </div>

                

            <div className="logoBrand">
                    <div className="image">
                    <img src={honda} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={jeep} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={ducati} alt="" />
                    </div>
                </div>

                

            <div className="logoBrand">
                    <div className="image">
                    <img src={nissan} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={audi} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={kawasaki} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={volvo} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={kia} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={scania} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={tesla} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={bmw} alt="" />
                    </div>
                </div>
            <div className="logoBrand">
                    <div className="image">
                    <img src={mini} alt="" />
                    </div>
                </div>

            </Slide>
        </div>
    )
}