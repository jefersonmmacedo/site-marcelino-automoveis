import "./sliderCategories.css"
import {FaBed, FaShower, FaCar, FaBath} from 'react-icons/fa';
import {IoCrop, IoMove, IoArrowBack, IoArrowForward, IoLocationOutline} from 'react-icons/io5';
import ImageHouse1 from "../../assets/images/house.jpg";
import ImageHouse2 from "../../assets/images/house1.jpg";
import ImageHouse3 from "../../assets/images/house2.jpg";
import ImageHouse4 from "../../assets/images/house4.jpg";
import ImageHouse5 from "../../assets/images/house5.jpg";
import ImageHouse6 from "../../assets/images/house6.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function SliderCategories() {
  const images = [
    ImageHouse1,
    ImageHouse2,
    ImageHouse3,
    ImageHouse4,
];

const buttonStyle = {
  padding: '10px',
  borderRadius: '50%',
  background: 'rgba(237,50,55, 0.5)',
  color: '#fff',
  border: '0px',
  margin: '10px'
};

const properties = {
  prevArrow: <button style={{ ...buttonStyle }}><IoArrowBack/></button>,
  nextArrow: <button style={{ ...buttonStyle }}><IoArrowForward/></button>
}
   
    return (
      <Slide {...properties}>
          <div className="each-slide-effect">
          <div className="imageTop">
            <div className="image">
                <a href="/imovel">
                    <img src={images[0]} alt="" />
                </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Suítes</p>
                            <div className="simbol">
                                <FaBath />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[1]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Suítes</p>
                            <div className="simbol">
                                <FaBath />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[2]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Suítes</p>
                            <div className="simbol">
                                <FaBath />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="each-slide-effect">
          <div className="imageTop">
          <div className="image">
            <a href="/imovel">
                    <img src={images[3]} alt="" />
            </a>
            </div>
                <div className="blockSlider">
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    <a href="/imovel">
                    <h3>VOLKSWAGEN <span>GOLF</span></h3>
                    <h4>2.0 TSI GTI 16V TURBO GASOLINA 4P AUTOMÁTICO</h4>
                    </a>
                    <h5><IoLocationOutline />Centro - Rio Bonito - Rio de Janeiro</h5>
                    <div className="icons">
                        <div className="iconUnic">
                            <p>Quartos</p>
                            <div className="simbol">
                                <FaBed />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Suítes</p>
                            <div className="simbol">
                                <FaBath />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Banheiro</p>
                            <div className="simbol">
                                <FaShower />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Garagem</p>
                            <div className="simbol">
                                <FaCar />
                                <p>3</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Área total</p>
                            <div className="simbol">
                                <IoMove />
                                <p>300 M2</p>
                            </div>
                        </div>
                        <div className="iconUnic">
                            <p>Construção</p>
                            <div className="simbol">
                                <IoCrop />
                                <p>150 M2</p>
                            </div>
                        </div>
                    </div>
                    <div className="pricing">
                        <h2>R$ 139.000,00</h2>
                    </div>
                </div>
            </div>
          </div>
      </Slide>
  );
};
  

  export { SliderCategories }