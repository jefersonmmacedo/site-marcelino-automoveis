import "./propertyUnicBlock.css"
import slugify from 'react-slugify';
import { FaBed, FaCar, FaShower } from "react-icons/fa";
import profile from "../../assets/images/profile.png";
import km from "../../assets/images/icons/km.png";  
import marcha2 from "../../assets/images/icons/marcha2.png";  
import {IoHeart, IoLocationOutline, IoCalendarOutline} from 'react-icons/io5';
import {FaRoad} from 'react-icons/fa';
import {GiGearStickPattern, GiRoad} from 'react-icons/gi';
import { NewFavorite } from "../NewFavorite/NewFavorite";
import { NewShareBox } from "../NewShareBox/NewShareBox";
import { TbRoad } from "react-icons/tb";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

export function PropertyUnicBlock({id, style}) {

    const [autos, setAutos] = useState([]);

    useEffect(() => {
        async function loadAutos() {
            await api.get(`/autos/unicauto/${id}`).then((res) => {
                setAutos(res.data[0])
            }).catch((error) => {
                console.log(error)
            })
        }

        loadAutos()
    },[id])

    const company = `${autos?.nameCompany}`
    const nameSlug = slugify(autos?.nameCompany);
    const titleModel = `${autos?.model}`
    
    return (
            <div className="PropertyUnicBlock">
                    <div className={style === "Emphasis" ? "imageSliderEmphasis": "imageSlider"}>
                    <a href={`/auto/${autos?.id}`}>
                    {/* <SliderBox images={autos?.images} idProperty={autos?.id} imageDestaque={autos?.featuredImage}/> */}

                    <img 
                        src={autos?.featuredImage}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // previne loop
                            currentTarget.src="https://firebasestorage.googleapis.com/v0/b/suachave-4bcbe.appspot.com/o/default.png?alt=media&token=6b8adb0b-f3ac-40ef-a0fb-7e5408245b03";
                        }}
                        alt={autos?.title === "" ? "Imagem propriedade" : autos?.title}
                        />

                    {/* <img src={imageDefault} alt={autos?.title} /> */}
                </a>
                    </div>

                            {/* {new Date(autos?.created_at).getDate() === new Date().getDate() &&
                    new Date(autos?.created_at).getMonth() === new Date().getMonth() &&
                    new Date(autos?.created_at).getFullYear() === new Date().getFullYear()
                    ?
                    <div className="featured">
                        <p>Novo</p>
                    </div>
                    : ""
                    }  */}
                    <div className="infosPropertyButtons">
                        <div className="status">
                        <a href={`/agencia/${nameSlug}`}>
                            <div className="image">
                                <img src={autos?.avatarCompany} alt={autos?.nameCompany} />
                            </div>
                            </a>
                            <a href={`/agencia/${nameSlug}`}>
                            <p>{company !== undefined ? company.slice(0,23) : company}</p>
                            </a>
                        </div>
                    <div className="infosButtons">
                  
                    <div className="share">
                    <NewShareBox idAuto={autos?.id} title={autos?.title}/>
                    </div>
                    <div className="heart2">
                    <NewFavorite idAuto={autos?.id} idCompany={autos?.idCompany} page={"not"}/>
                    </div>
                    </div>
                    </div>
                            <div className="text">
                            <div className="textInfos">
                    <a href={`/auto/${autos?.id}`}>
                    <h4>{autos?.brand}  <span>{titleModel.slice(0,15)}</span></h4>
                        </a>
                    {/* <h5>{StatusProperty}</h5> */}
                    <h6>{autos?.version}</h6>
                    </div>

                            <div className="iconsBox">

                            {autos?.year === "" && autos?.yearModel === ""? "" :
                                <div className="iconUnicBox">
                                        <IoCalendarOutline />
                                    <div className="simbolBox">
                                    <p>{autos?.year}/{autos?.yearModel}</p>
                                    </div>
                                </div>
                            }
                            {autos?.mileage === "" ? "" :
                                <div className="iconUnicBox">
                                        <TbRoad />
                                    <div className="simbolBox">
                                    <p>{autos?.mileage} Km</p>
                                    </div>
                                </div>
                            }
                            {autos?.march === "" ? "" :
                                <div className="iconUnicBox">
                                        <GiGearStickPattern />
                                    <div className="simbolBox">
                                    <p>{autos?.march}</p>
                                    </div>
                                </div>
                            }

                            </div>
                            <div className="pricing">
                                <h6>{autos?.cityCompany} - {autos?.ufCompany}</h6>
                                <h4>R$ <span>{autos?.value}</span></h4>
                            </div>
                            </div>
            </div>
    )
}