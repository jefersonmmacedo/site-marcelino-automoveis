import "./sliderHome.css"
import { FaCar } from 'react-icons/fa';
import {IoArrowBack, IoArrowForward, IoLocationOutline, IoCalendarClearOutline, IoCalendarOutline} from 'react-icons/io5';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";   
import gasolina from "../../assets/images/icons/gasolina.png";  
import porta from "../../assets/images/icons/porta.png";  
import { useFetch } from "../../hooks/useFetch";
import { TbGasStation, TbRoad } from "react-icons/tb";
import { GiGearStickPattern, GiSteeringWheel } from "react-icons/gi";

function SliderHome() {
  const idCompany = process.env.REACT_APP_CODEUSER
  console.log(idCompany);

const {data} = useFetch(`autos/company/${idCompany}`);

if(data) {
    console.log(data);
}

if(!data) {
    return (
        <h5>Carregando...</h5>
    )
}


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
     <div className="dataImages">
       <Slide {...properties}>
      {data?.map((slider) =>{
        return (
          slider?.availability !== "Disponível" ? "" :
         <div className="each-slide-effect">
         <div className="imageTop">
           <div className="image">
               <a href={`/auto/${slider?.id}`}>
                   <img src={slider?.featuredImage} alt="" />
               </a>
           </div>
               <div className="blockSlider">
               {new Date(slider?.created_at).getDate() === new Date().getDate() &&
                new Date(slider?.created_at).getMonth() === new Date().getMonth() &&
                new Date(slider?.created_at).getFullYear() === new Date().getFullYear()
                ? 
            <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
             }

                   <a href={`/auto/${slider?.id}`}>
                   <h3>{slider?.brand} <span>{slider?.model}</span></h3>
                   <h4>{slider?.version}</h4>
                   </a>
                   {/* <h5><IoLocationOutline />{slider?.cityCompany} - {slider?.ufCompany}</h5> */}
                   <div className="iconsBox">

                        {slider?.year === "" && slider?.yearModel === ""? "" :
                            <div className="iconUnicBox">
                                <div className="simbolBox">
                                    <IoCalendarOutline />
                                </div>
                                <p>{slider?.year}/{slider?.yearModel}</p>
                            </div>
                        }
                        {slider?.mileage === "" ? "" :
                            <div className="iconUnicBox">
                                <div className="simbolBox">
                                    <TbRoad />
                                </div>
                                <p>{slider?.mileage} Km</p>
                            </div>
                        }
                         {slider?.fuel === "" ? "" :
                         <div className="iconUnicBox">
                            <div className="simbolBox">
                            <TbGasStation />
                            </div>
                                <p>{slider?.fuel}</p>
                        </div>
                         }
                        { slider?.type === "" ? "" :
                        slider?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiGearStickPattern />
                            </div>
                                <p>{slider?.march}</p>
                        </div>
                        }
                        {/* {
                        slider?.direction === "" ? "" :
                        slider?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiSteeringWheel />
                           
                            </div>
                                <p>{slider?.direction}</p>
                        </div>
                        } */}

                        </div>
                        <div className="pricing">
                            <h6>{slider?.cityCompany} - {slider?.ufCompany}</h6>
                            <h4>R$ <span> {slider?.value}</span></h4>
                        </div>
               </div>
           </div>
         </div>
        )
      })}
      </Slide>
     </div>
  );
};
  

  export { SliderHome }





 