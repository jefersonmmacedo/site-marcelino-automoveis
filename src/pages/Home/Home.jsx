import "./home.css";
import Navbar2 from "../../components/Nav/Navbar";
import Modal from 'react-modal';
import { useState } from "react";
import { SearchProperty } from "../../components/SearchProperty/SearchProperty";
import { Footer } from "../../components/Footer/Footer";
import { SliderHome } from "../../components/SliderHome/SliderHome";
import {  PropertyCarroussel } from "../../components/PropertyCarroussel/PropertyCarroussel";
import { useEffect } from "react";
import LogoImg from '../../assets/images/Logo2.png';
import propaganda from '../../assets/images/propaganda.png';
import buscaDistrito from '../../services/api-buscaDistrito';
import { toast } from 'react-toastify';
import { ToHire } from "../../components/ToHire/ToHire";
import { BrandCarroussel } from "../../components/BrandCarroussel/BrandCarroussel";
import { ModelCarroussel } from "../../components/ModelCarroussel/ModelCarroussel";
import { Fipe } from "../../components/Fipe/Fipe";
import { Finance } from "../../components/Finance/Finance";
import { NewSearchClient } from "../../components/NewSearchClient/NewSearchClient";
import { TopHeadHomeV3 } from "../../components/TopHeadHomeV3/TopHeadHomeV3";
import { AutosModel } from "../../components/AutosModel/AutosModel";
import { IoCarSport, IoCloseOutline, IoSearch } from "react-icons/io5";
import { FaBusAlt, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { MdElectricCar } from "react-icons/md";
import { BlocckAutosHome } from "../../components/BlocckAutosHome/BlocckAutosHome";

export function Home() {
    const LocalCity = localStorage.getItem("suachaveautocity");
    const userCity = JSON.parse(LocalCity);
    const Local = localStorage.getItem("suachaveauto");
    const user = JSON.parse(Local);

    const [isOpenModal, setIsOpenModa] = useState(false);
    const [isOpenModalSearchProperty, setIsOpenModaSearchProperty] = useState(false);
    const [timer, setTimes] = useState(false);

    const [city, setCity] = useState("");
    const [districtAll, setDistrictAll] = useState([]);
    const [uf, setUf] = useState("");
    const [typeCar, setTypeCar] = useState("Carros");

    // useEffect(() => {
    //     function initialTime() {
    //         if(user !== null && user !== undefined && user !== "") {
    //             return
    //         }
    //         if(userCity !== null && userCity !== undefined && userCity !== "") {
    //             return
    //         }
    //         setTimeout(() => {
    //             setIsOpenModa(true)
    //           }, "10000")
        
    //     }
    //     initialTime()
    // }, [])

    function HandleNewClientBrowser() {
        if(uf === "" && city === "") {
            return;
        }
        const suachaveauto = {
            city: city,
            uf: uf,
          };
        const suachaveauto2 = {
            type: "company",
            city: city,
            uf: uf,
          };

        localStorage.setItem("suachaveautocity", JSON.stringify(suachaveauto));
        localStorage.setItem("suachaveauto", JSON.stringify(suachaveauto2));
    }
    function handleOpenModal(e) {
      e.preventDefault();
        setIsOpenModa(true)
      }
    
      function handleCloseModal(e) {
        e.preventDefault();
        setIsOpenModa(false);
      }


      async function handleSearchDistrict(ufSelect) {
        console.log(ufSelect)
        try {
          const res = await buscaDistrito.get(`${ufSelect}/distritos`) 
            console.log(res.data)
            setDistrictAll(res.data)
            console.log(res.data[0].municipio.nome);
            return;
          }catch{
            console.log("error")
            toast.error("Escolha um estado e clica em buscar cidades")
        }
        return
    }

    if(districtAll) {
        districtAll.sort(function(a,b) {
            if(a.nome < b.nome ) {
                return -1
            } else {
                return true
            }
        })
        }

        
    function handleSetectCity(e) {
        setCity(e.target.value)
        console.log(e.target.value)
      }
      function handleSetectUf(e) {
        setUf(e.target.value)
        console.log(e.target.value)
        handleSearchDistrict(e.target.value)
      }

      function handleOpenModalSearchProperty(e) {
        e.preventDefault();
        console.log("Olá")
          setIsOpenModaSearchProperty(true)
        }
      
        function handleCloseModalSearchProperty(e) {
          e.preventDefault();
          setIsOpenModaSearchProperty(false);
        }
  
        function handleTypeCar(data) {
          setTypeCar(data)
        }


    Modal.setAppElement('#root');

    return (
        <div className="Home">
            <Navbar2 />
            <SliderHome />
            {/* <TopHeadHomeV3 /> */}
            {/* <div className="searchView">
            <SearchProperty openModal={handleOpenModal}/>
            </div> */}
            {/* <div className="searchViewButton">
            <button onClick={handleOpenModalSearchProperty}><IoSearch />Buscar Imóveis</button>
            </div> */}
            
            <div className="textFeature">
            <h3>Anúncios mais recentes</h3>
            </div>
            <BlocckAutosHome />
            <div className="carrousselBrabd">
            <BrandCarroussel />
            </div>


            <Finance />
            <Footer />

        </div>
    )
}