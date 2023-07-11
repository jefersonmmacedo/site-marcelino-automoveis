import "./searchPropertyHomeCenter.css";
import { useState } from "react";
import {IoSearch, IoAddOutline, IoRemoveOutline, IoCarOutline, IoCarSportOutline, IoLocationOutline, IoCarSport, IoClose} from "react-icons/io5";
import { useFetch } from "../../hooks/useFetch";
import { toast } from "react-toastify";
import { TbBone, TbSofa } from "react-icons/tb";
import { MdElectricCar } from "react-icons/md";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBusAlt, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { useEffect } from "react";
import api from "../../services/api";

export function SearchPropertyHomeCenter() {
    const [isCheckedPets, setIsCheckedPets] = useState(false);
    const [isCheckedFurnished, setIsCheckedFurnished] = useState(false);

    const [pets, setPets] = useState("não");
    const [furnished, setFurnished] = useState("não");
    const [code, setCode] = useState(false);
    const [status, setStatus] = useState("Carros");
    const [subType, setSubType] = useState("");
    const [type, setType] = useState("");
    const [bedroom, setBedroom] = useState("0");
    const [suite, setSuite] = useState("0");
    const [garage, setGarage] = useState("0");
    const [restroom, setRestroom] = useState("0");
    const [viewFilter, setViewFilter] = useState(true);
    const [filter, setFilter] = useState(false);
    const [data, setData] = useState([]);

    const [search, setSearch] = useState("");
    const searchLower = search.toLowerCase();

    const availability = "Disponível";

    useEffect(() => {
        async function loadProperty() {
            await api.get(`/autos/allcars/${availability}`).then((res) => {
                setData(res.data);
                console.log(res.data);
            }).catch((error) => {
                console.log(error)
            })
        }

        loadProperty()
    }, [])


    var brandModel = [];


    data?.forEach((item) => {
        var duplicated  = brandModel.findIndex(redItem => {
            return item.brand === redItem.brand && item.model === redItem.model;
        }) > -1;
    
        if(!duplicated) {
            brandModel.push(item);
        }
    });



    if(brandModel) {
        brandModel.sort(function(a,b) {
            if(a.brand < b.brand ) {
                return -1
            } else {
                return true
            }
        })
        }

        console.log(brandModel)
   
        const searchFilter = brandModel?.filter((cars) => cars.brand.toLowerCase().includes(searchLower)
                                                            || cars.model.toLowerCase().includes(searchLower))

        console.log("searchFilter")
        console.log(searchFilter)

        function handleType(e) {
            setType(e.target.value)
            console.log(e.target.value)
        }
        function handleSubType(e) {
            setSubType(e.target.value)
            console.log(e.target.value)
        }

        function handleBedroom(e) {
            setBedroom(e.target.value)
            console.log(e.target.value)
        }
        function handleSuite(e) {
            setSuite(e.target.value)
            console.log(e.target.value)
        }
        function handleRestroom(e) {
            setRestroom(e.target.value)
            console.log(e.target.value)
        }
    
        function handleGarage(e) {
            setGarage(e.target.value)
            console.log(e.target.value)
        }

      function handleActiveCode(data, status, filter) {
        setCode(data)
        setStatus(status)
        setViewFilter(filter)
      }

      function handleClearAdress() {
        // setAdressSelected("")
        setSearch("")
      }
    

    function handleSelectAddress(data) {
        console.log(data)    
      }

      function handleFilter(e) {
        e.preventDefault()
        setFilter(!filter)
      }

      function handleSelectPets(e) {
        e.preventDefault();
        setIsCheckedPets(!isCheckedPets);
        if(pets === "não") {
            setPets("sim");
        } else {
            setPets("não");
        }
        console.log(pets)
      };

      function handleSelectFurnished(e) {
        e.preventDefault();
        setIsCheckedFurnished(!isCheckedFurnished);
        if(furnished === "não") {
            setFurnished("sim");
        } else {
            setFurnished("não");
        }
        console.log(furnished)
      };
    
      function handleLinkSearchProperty(e) {
        if(status === ""){
            toast.error("Venda ou aluguel?");
            return
        }
        if(type === "" || subType === "") {
            toast.error("Selecione tipo de imóvel");
            return
        }
        // if(cityNew === "" || ufNew === "") {
        //     toast.error("Selecione o local desejado");
        //     return
        // }
        e.preventDefault();
       //window.open(`/imoveis/${status}?cityNew=${cityNew}&ufNew=${ufNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}`,"_self")
      // window.open(`/imoveis/${status}?uf=${ufNew}&city=${cityNew}&district=${districtNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}&pets=${pets}&mobilha=${furnished}`,"_self")
    }


    // const frase = status === "Carros" ? `Digite marca ou modelo do carro`
    //             : status === "Motos" ? `Digite marca ou modelo da moto`
    //             : status === "Utilitários" ? `Digite marca ou modelo do utilitário`
    //             : status === "Caminhões" ? `Digite marca ou modelo do caminhão`
    //             : status === "Ônibus" ? `Digite marca ou modelo do ônibus`
    //             : `Digite marca ou modelo do carro`
    const frase = `Digite marca ou modelo`

    return (
        <div className="SearchPropertyHomeCenter">
            {/* <div className="selectButtonsHomeTop">
            <button className={status === "Carros" ? "btn" : "btn1"} onClick={() => handleActiveCode(false, "Carros", true)}> <IoCarSport /> Carros</button>
            <button className={status === "Motos" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Motos", true)}> <FaMotorcycle /> Motos</button>
            <button className={status === "Utilitários" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Utilitários", true)}> <HiTruck /> Utilitários </button>
            <button className={status === "Caminhões" ? "btn2" : ""} onClick={() => handleActiveCode(false, "Caminhões", true)}> <FaTruckMoving /> Caminhões </button>
            <button className={status === "Ônibus" ? "btn3" : "btn4"} onClick={() => handleActiveCode(false, "Ônibus", true)}> <FaBusAlt /> Ônibus </button>
            <button className={status === "Carro Elétrico" ? "btn3" : "btn4"} onClick={() => handleActiveCode(false, "Carro Elétrico", true)}> <MdElectricCar /> Elétrico </button>
                </div>    */}
  
            <div className="search">
                {code === false ?
                <>
                {/* <input type="primary" placeholder={`${status}:`} disabled /> */}
            {/* <select className="primary" value={type} onChange={handleType}>
                        <option value="">Tipo</option>
                        <option value="Residencial">Residencial</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Industrial">Industrial</option>
                        <option value="Rural">Rural</option>
                        <option value="Terrenos e Lotes">Terrenos e Lotes</option>
                    </select>
                    <select value={subType} onChange={handleSubType} className={subType === "" ? "" : "select"}>
                        {type === "Residencial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Casa">Casa</option>
                        <option value="Casa geminada">Casa geminada</option>
                        <option value="Sobrado">Sobrado</option>
                        <option value="Bangalô">Bangalô</option>
                        <option value="Edícula">Edícula</option>
                        <option value="Flat">Flat</option>
                        <option value="Casa de vila">Casa de vila</option>
                        <option value="Condomínio fechado">Condomínio fechado</option>
                        <option value="Apartamento">Apartamento</option>
                        <option value="Apartamento duplex">Apartamento duplex</option>
                        <option value="Cobertura">Cobertura</option>
                        <option value="Cobertura duplex">Cobertura duplex</option>
                        <option value="Loft">Loft</option>
                        <option value="Kitnet">Kitnet</option>
                        <option value="Mansão">Mansão</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Comercial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Loja">Loja</option>
                        <option value="Conjunto comercial">Conjunto comercial</option>
                        <option value="Ponto comercial">Ponto comercial</option>
                        <option value="Sala Comercial">Sala Comercial</option>
                        <option value="Prédio">Prédio</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Stúdio">Stúdio</option>
                        </>
                        : type === "Industrial" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Galpão">Galpão</option>
                        <option value="Área industrial">Área industrial</option>
                        </>
                        : type === "Rural" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Chácara">Chácara</option>
                        <option value="Fazenda">Fazenda</option>
                        <option value="Sítio">Sítio</option>
                        </>
                        : type === "Terrenos e Lotes" ?
                        <>
                        <option value="">Subtipo</option>
                        <option value="Área">Área</option>
                        <option value="Terreno/Lote">Terreno/Lote</option>
                        </>
                        :  <option value="">Subtipo</option>
                        }
                    </select> */}


                <input type="text" placeholder={frase} value={search} onChange={e => setSearch(e.target.value)} />
                    {search === "" ? "" :
                    <button onClick={handleClearAdress} className="btnClear"><IoClose /></button>
                    }


                </>
                    :
                    <>
                    <input type="text" className="inputCode" placeholder="Digite o código" />
                    </>
                }

                {search === "" || searchFilter.length === 0  ? "" :
                                <div className="search3">
                                    <div className="listAdress">
                                        {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} onClick={() => handleSelectAddress(`${autos.brand} - ${autos.model}`)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}      
                                    </div>
                                </div>
                                }


                     {filter ===  true ? "" :
                     <button className="btnSearch" onClick={handleLinkSearchProperty}><IoSearch /></button>
                    }
                    <button className="mobile" onClick={handleLinkSearchProperty}><IoSearch /></button>
            </div>

            {search === "" || searchFilter.length === 0  ? "" :
                                <div className="search2">
                                    <div className="listAdress">
                                        {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} onClick={() => handleSelectAddress(`${autos.brand} - ${autos.model}`)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}      
                                    </div>
                                </div>
                                }


            {/* <div className="textLocation">
                <div className="blockInfo">
                <div className="checkDiv">
                    <input type="checkbox" value={pets} onChange={handleSelectPets} checked={isCheckedPets}/>
                    <h5><IoCarSportOutline />Okm</h5>
                </div>
                <div className="checkDiv">
                    <input type="checkbox" value={pets} onChange={handleSelectPets} checked={isCheckedPets}/>
                    <h5><IoCarOutline />Usados</h5>
                </div>
                <div className="checkDiv">
                    <input type="checkbox" value={furnished} onChange={handleSelectFurnished} checked={isCheckedFurnished}/>
                    <h5><AiOutlineDollarCircle />Aceita financimento</h5>
                </div>
                </div>
                <div className="blockInfo">
                <div className="checkDiv">
                    <h5><IoLocationOutline />Rio Bonito - RJ</h5>
                </div>
                <button>Alterar</button>
                </div>
            </div> */}

        </div>
    )
}
