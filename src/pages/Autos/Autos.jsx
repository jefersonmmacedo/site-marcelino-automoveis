import "./autos.css"
import { SliderImages } from '../../components/SliderImages/SliderImages';
import Navbar2 from "../../components/Nav/Navbar";
import { IoColorFillOutline, IoCalendarOutline, IoCheckmarkSharp, IoLocationOutline, IoCarSportOutline } from "react-icons/io5";
import {TbRoad, TbGasStation} from 'react-icons/tb';
import {TiSortNumerically} from 'react-icons/ti';
import {GiGearStickPattern, GiCarDoor, GiSteeringWheel } from 'react-icons/gi';
import { Footer } from "../../components/Footer/Footer";
import { CompanyInfo } from "../../components/CompanyInfo/CompanyInfo";
import { NewScheduling } from "../../components/NewScheduling/NewScheduling";
import { NewMessageAutos } from "../../components/NewMessageAutos/NewMessageAutos";
import { NewFavorite } from "../../components/NewFavorite/NewFavorite";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { NewShare } from "../../components/NewShare/NewShare";
import { FaMotorcycle } from "react-icons/fa";
import Navbar from "../../components/NavBarTop/Navbar";
import { FooterSlim } from "../../components/FooterSlim/FooterSlim";


export function Autos() {
    const {id} = useParams();
    const {data} = useFetch(`/autos/unicauto/${id}`);


    if(!data) {
        return (
            <h5>Carregando...</h5>
        )
    }

    
    const Referência = new Date(data[0]?.created_at).getMonth() === 0 ? "Janeiro"
                    : new Date(data[0]?.created_at).getMonth() === 1 ? "Fevereiro"
                    : new Date(data[0]?.created_at).getMonth() === 2 ? "Março"
                    : new Date(data[0]?.created_at).getMonth() === 3 ? "Abril"
                    : new Date(data[0]?.created_at).getMonth() === 4 ? "Maio"
                    : new Date(data[0]?.created_at).getMonth() === 5 ? "Junho"
                    : new Date(data[0]?.created_at).getMonth() === 6 ? "Julho"
                    : new Date(data[0]?.created_at).getMonth() === 7 ? "Agosto"
                    : new Date(data[0]?.created_at).getMonth() === 8 ? "Setembro"
                    : new Date(data[0]?.created_at).getMonth() === 9 ? "Outubro"
                    : new Date(data[0]?.created_at).getMonth() === 10 ? "Novembro"
                    : new Date(data[0]?.created_at).getMonth() === 11 ? "Dezembro"
                    : ""
   
    const textReferência = `${Referência}/${new Date(data[0]?.created_at).getFullYear()}`
    return (
       <div className="Autos">
        <Navbar />
        <div className="main">
          <SliderImages images={data[0]?.images} id={data[0]?.id}/>
          <div className="data">
          <div className="AutosUnic">
            <div className="targets">

            {new Date(data[0]?.created_at).getDate() === new Date().getDate() &&
                new Date(data[0]?.created_at).getMonth() === new Date().getMonth() &&
                new Date(data[0]?.created_at).getFullYear() === new Date().getFullYear()
                ? 
            <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
             }


                    <div className="ref">
                        <p>REF.: {data[0]?.id?.toUpperCase()}</p>
                    </div>
                    {/* <NewMessageAutos idAuto={data[0]?.id} idCompany={data[0]?.idCompany} imageAuto={data[0]?.featuredImage}/> */}
                    <NewScheduling idAuto={data[0]?.id} idCompany={data[0]?.idCompany} image={data[0]?.featuredImage} brand={data[0]?.brand}  model={data[0]?.model}
                        version={data[0]?.version} year={`${data[0]?.year}/${data[0]?.yearModel}`} plate={data[0]?.plate}/>
                    <NewShare idAuto={data[0]?.id} title={`${data[0]?.brand} - ${data[0]?.model} (${data[0]?.cityCompany} / ${data[0]?.ufCompany})`}/>
                     <div className="heart">
                    <NewFavorite idAuto={data[0]?.id} idCompany={data[0]?.idCompany} page={"yes"}/>
                    </div>
            </div>
                <div className="text">
                    <h2>{data[0]?.brand} <span>{data[0]?.model}</span></h2>
                    <h3>{data[0]?.version}</h3>
                    <h5><IoLocationOutline />{data[0]?.cityCompany} - {data[0]?.ufCompany}</h5>
                    {/* <h4>ID: {data[0]?.id}</h4> */}
                    <div className="status">
                        <p>Aceita financiamento</p>
                    </div>
                    <h4 className="description">{data[0]?.description}</h4>

                    <div className="iconsBox">

                        <div className="iconUnicBox">
                            <div className="simbolBox">
                                <IoCalendarOutline />
                               
                            </div>
                                <p>{data[0]?.year}/{data[0]?.yearModel}</p>
                        </div>
                        

                        <div className="iconUnicBox">
                            <div className="simbolBox">
                                <TbRoad />
                          
                            </div>
                                <p>{data[0]?.mileage} Km</p>
                        </div>
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <TbGasStation />
                           
                            </div>
                                <p>{data[0]?.fuel}</p>
                        </div>
                        {data[0]?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiGearStickPattern />
                           
                            </div>
                                <p>{data[0]?.march}</p>
                        </div>
                        }
                        {data[0]?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiCarDoor />
                         
                            </div>
                                <p>{data[0]?.doors}</p>
                        </div>
                         }
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <IoColorFillOutline />
                          
                            </div>
                                <p>{data[0]?.color}</p>
                        </div>
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            {data[0]?.type === "Motos" ?
                                <FaMotorcycle />
                                :
                                <IoCarSportOutline />
                                }
                              
                            </div>
                                <p>{data[0]?.bodywork}</p>
                        </div>
                        {data[0]?.type === "Motos" ? "":
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <GiSteeringWheel />
                           
                            </div>
                                <p>{data[0]?.direction}</p>
                        </div>
                        }
                        <div className="iconUnicBox">
                            <div className="simbolBox">
                            <TiSortNumerically />
                            <p>Final/Placa</p>
                            </div>
                            <p>{data[0]?.endOfBoard}</p>
                        </div>
                    </div>

                    <div className="informationsDocs">

                        {data[0]?.licensingInfos.map((doc) => {
                            return (
                        <div className="item">
                            <IoCheckmarkSharp /> <p>{doc.item}</p> 
                        </div>
                            )
                        })}
                    </div>
                    <div className="characteristics">
                    {data[0]?.characteristcs.map((doc) => {
                            return (
                        <div className="item">
                            <IoCheckmarkSharp /> <p>{doc.item}</p> 
                        </div>
                            )
                        })}

                    </div>
                    <div className="pricing">
                        <div className="PricingClient">
                        <h5>À venda por:</h5>
                        <h2>R$ {data[0]?.value}</h2>
                        </div>
                        <div className="PricingFipe">
                        <h5>Fipe - Ref.:{textReferência}</h5>
                        <h2>R$ {data[0]?.valueFipe}</h2>
                       <a href={`/consulta-placa/${data[0]?.plate}`}>Ver Fipe atualizada</a>
                        </div>
                       
                    </div>
                    {/* /consulta-placa/LXK-0783 */}

                    {data[0]?.video === "" ? "" :
                    <div className="video">
                    <iframe width="100%" height="300" src={data[0]?.video} title="YouTube video player" frameBorder="0"
                    style={{border:"0px", borderRadius: "20px"}}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    }

                        {/* <div className="map">
                            <iframe
                            width="100%" height="300"
                            frameBorder="0" style={{border:"0px", borderRadius: "20px"}} 
                            referrerpolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCZllXD0czNd_oeF0u_o9LUVJ2bCd1K4p8&q=${data[0]?.cityCompany} - ${data[0]?.ufCompany}`}
                            allowFullScreen>
                            </iframe>
                           <h6> * Endereço aproximado</h6>
                        </div>  */}

                 <div className="infosCompanyMobile">
                     <div className="pricingInfos">
                     <h5>À venda por:</h5>
                     <h3>R$ <span>{data[0]?.value} </span></h3>
                 </div>
                    <CompanyInfo idAuto={data[0]?.id} idCompany={data[0]?.idCompany} nameCompany={data[0]?.fantasyName} companyPhone={data[0]?.phone}/>
                </div>

             
                    </div>
                </div>

                <div className="infosCompanyAuto">
                     <div className="pricingInfos">
                     <h5>À venda por:</h5>
                     <h3>R$ <span>{data[0]?.value} </span></h3>
                     </div>
                    <CompanyInfo idAuto={data[0]?.id} idCompany={data[0]?.idCompany} nameCompany={data[0]?.fantasyName} companyPhone={data[0]?.phone}/>
                </div>


                </div>
        </div>
        <FooterSlim />

       </div>
      )
}