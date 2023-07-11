﻿import "./properties.css";
import Navbar2 from "../../components/Nav/Navbar";
import { Footer } from "../../components/Footer/Footer";
import { FiArrowUpCircle } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import notFoundImage from "../../assets/images/svg/404property.svg";
import loader from "../../assets/images/gif/loader.gif";
import { PropertyUnicBlockLoader } from "../../components/PropertyUnicBlockLoader/PropertyUnicBlockLoader";
import { useFetch } from "../../hooks/useFetch";
import { PropertyUnicBlock } from "../../components/PropertyUnicBlock/PropertyUnicBlock";
import { FilterPropertiesList } from "../../components/FilterPropertiesList/FilterPropertiesList";
import { useEffect, useState } from "react";
import api from "../../services/api";


export function Properties(){
    const idCompany = process.env.REACT_APP_CODEUSER
    console.log(idCompany);
    
    const [propertyNotFound, setPropertyNotFound] = useState(false);
    const {data} = useFetch(`autos/company/${idCompany}`);

     
    if(data) {
        console.log(data)
    }


    setTimeout(() => {
        if(data?.length === 0) {
            console.log("Nada aqui!")
            setPropertyNotFound(true)
        }
    }, "3000")


      if(!data) {
        return (
            <div className="loader">
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            <PropertyUnicBlockLoader />
            </div>
        )
    }

    function handleTop(e) {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    return (
        <div className="Properties">
        <Navbar2 />
        <div className="listPage">
        <div className="ListProperty">
        <div className="topList">
        <div className="textItens">
            {data?.length === 0 ?
                ""                   
            : 
            <h3>Carros e motos disponíveis</h3>
            }
            </div>
           </div>

        {data?.length > 0 ?
         <div className="itens">
            {data?.map((property) => {
                    return (
                        property?.availability !== "Disponível" ? "" :
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}

           
                          
            </div> 
            :
                <div className="MainAbout">
                    {propertyNotFound === false ? "" :
                    <>
                    <img src={notFoundImage} alt="" />
                    <h3>Nenhum imóvel localizado</h3>
                    </>
                    }
                </div>
        }



                    {data?.length < 12 || data?.length === 0 ? "":
                <div className="sentinela" id="sentinela"> 
                         <div className="itens">          
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                         <PropertyUnicBlockLoader />
                        </div>  
                        <img src={loader} alt="Gif LOader more posts" width={20}/>
                </div>   
                }

              
        </div>
            <button className="topScroll" onClick={handleTop}><FiArrowUpCircle /></button>
        </div>
        <Footer />
        </div>
    )
}
