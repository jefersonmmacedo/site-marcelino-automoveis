import { useState } from "react";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { TbBone, TbSofa } from "react-icons/tb";
import { IoCarSport, IoCloseOutline, IoSearch } from "react-icons/io5";
import { FaBusAlt, FaMotorcycle, FaTruckMoving } from "react-icons/fa";
import { HiTruck } from "react-icons/hi";
import { MdElectricCar } from "react-icons/md";
import { useFetch } from "../../hooks/useFetch";
import "./filterPropertiesList.css"
import { useEffect } from "react";
import api from "../../services/api";

export function FilterPropertiesList({status, typeProperty, brandAuto, modelAuto, district, city, uf, quarto, banheiro, suítes, doorsAuto}) {
    console.log({status, district, city, uf, quarto, banheiro, suítes, doorsAuto})
    const [filter, setFilter] = useState(false);
    const [data, setData] = useState([]);
    const [type, setType] = useState(typeProperty === "" ? "" : typeProperty);
    const [brand, setBrand] = useState(brandAuto === "" ? "" : brandAuto);
    const [model, setModel] = useState(modelAuto === "" ? "" : modelAuto);
    const [doors, setDoors] = useState(doorsAuto === "0" ? "0" : doorsAuto);
    const [suite, setSuite] = useState(suítes === "0" ? "0" : suítes);
    const [restroom, setRestroom] = useState(banheiro === "0" ? "0" : banheiro);
    const [statusProperty, setStatusProperty] = useState(status);

    const [search, setSearch] = useState("");
    const searchLower = search.toLowerCase();

    const statusSelected = statusProperty === "" ? status : statusProperty;
    console.log({city, uf, district});
    const [AdressSelected, setAdressSelected] = useState(city !== null && district === null ? `${city} - ${uf}` : city !== null && district !== null ? `${district} - ${city} - ${uf}` :  "");
    const dataAdress = AdressSelected.split(" - ");
    const districtNew = dataAdress.length === 3 ? dataAdress[0] : ""
    const cityNew = dataAdress.length === 3 ? dataAdress[1] : dataAdress[0]
    const ufNew = dataAdress.length === 3 ? dataAdress[2] : dataAdress.length !== 3 ? dataAdress[1] : ""


    const availability = "Disponível";
    useEffect(() => {
        async function loadProperty() {
            await api.get(`/autos/allcars/${availability}`).then((res) => {
                setData(res.data);
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

  
        const searchFilter = brandModel?.filter((cars) => cars.brand.toLowerCase().includes(searchLower)
                                                            || cars.model.toLowerCase().includes(searchLower))

        console.log("searchFilter")
        console.log(searchFilter)

        function handleSelectAddress(brand, model) {
            setBrand(brand)
            setModel(model)
            console.log(data)    
          }
    
    function handleFiltro(e) {
        e.preventDefault();

        setFilter(!filter)
        console.log(!filter)
    }

    function handleNewSearchProperty(e) {
        e.preventDefault();
        //window.open(`/imoveis/${statusProperty}?uf=${ufNew === undefined ? "" : ufNew}&city=${cityNew}&district=${districtNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}`,"_self");
      //  window.open(`/imoveis/${statusProperty}?uf=${ufNew === undefined ? "" : ufNew}&city=${cityNew}&district=${districtNew}&tipo=${type}&subtipo=${subType}&quartos=${bedroom}&suites=${suite}&banheiros=${restroom}&garagem=${garage}&pets=${pets}&furnished=${furnished}`,"_self");
    }

    
    function handleNewStatus(data) {
        setStatusProperty(data)
        console.log(data)
    }
    // function handleNewPets(e) {
    //     e.preventDefault();
    //     if(pets === "não") {
    //         setPets("sim")
    //     } else {
    //         setPets("não")
    //     }
    // }

    // function handleNewFurnished(e) {
    //     e.preventDefault();
    //     if(furnished === "não") {
    //         setFurnished("sim")
    //     } else {
    //         setFurnished("não")
    //     }
    // }
    function handleType(e) {
        setType(e.target.value)
        console.log(e.target.value)
    }

    function handleDoors(e) {
        setDoors(e.target.value)
        console.log(e.target.value)
    }
    function handleRestroom(e) {
        setRestroom(e.target.value)
        console.log(e.target.value)
    }
    function handleSuite(e) {
        setSuite(e.target.value)
        console.log(e.target.value)
    }


    function handleClearItens(e) {
        e.preventDefault();
        setStatusProperty(status)
        setType("")
        setSuite("0")
        setRestroom("0")
    }

    function handleClearAdress() {
        setBrand("")
        setModel("")
      }
    


    return (
        <div className="FilterPropertiesList">
  <button onClick={handleFiltro}>Filtro +</button>
        <div className={filter === true ? "searchItens" : "searchItensNone"}>
        <div className="buttons">
        <button onClick={handleFiltro}>X</button>
        </div>
        <div className="searchOptions">
            <div className="dataSearchOptions">
            
            <div className="dataSelectsButtons">
            <button className={statusSelected === "Carros" ? "" : "btn"} onClick={() => handleNewStatus("Carros")}> <IoCarSport /> </button>
            <button className={statusSelected === "Motos" ? "" : "btn"} onClick={() => handleNewStatus("Motos")}> <FaMotorcycle /> </button>
            <button className={statusSelected === "Utilitários" ? "" : "btn"} onClick={() => handleNewStatus("Utilitários")}> <HiTruck />  </button>
            <button className={statusSelected === "Caminhões" ? "" : "btn"} onClick={() => handleNewStatus("Caminhões")}> <FaTruckMoving />  </button>
            <button className={statusSelected === "Onibus" ? "" : "btn"} onClick={() => handleNewStatus("Onibus")}> <FaBusAlt />  </button>
            <button className={statusSelected === "Eletricos" ? "" : "btn"} onClick={() => handleNewStatus("Eletricos")}> <MdElectricCar />  </button>
             </div>
             
            
             <div className="dataSelects2">
                <div className="search">
             <input type="text" placeholder="Digite bairro, cidade ou estado" value={brand === "" ? search : `${brand} - ${model}`} onChange={e => setSearch(e.target.value)} />
                    {brand === "" ? "" :
                    <button onClick={handleClearAdress} className="btnClear"><IoClose /></button>
                    }
                </div>

                    {search === "" || searchFilter.length === 0 || brand !== "" ? "" :
                        <div className="search3">
                            <div className="listAdress">
                            {searchFilter.map((autos) => {
                                            return (
                                                <h6 key={autos.id} onClick={() => handleSelectAddress(autos.brand, autos.model)}>{autos.brand} - {autos.model}</h6>
                                            )
                                        })}     
                            </div>
                        </div>
                    }
            </div>
             
             <div className="dataSelects">
             <h4>Tipo:</h4>
            <select value={type} onChange={handleType} className={type === "" ? "" : "select"}>
                <option value="">Tipo</option>
                <option value="Residencial">Residencial</option>
                <option value="Comercial">Comercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Rural">Rural</option>
                <option value="Terrenos e Lotes">Terrenos e Lotes</option>
            </select>
            </div>
             
         
            
            <div className="dataSelects">
                <h4>Portas: </h4>
            <select value={doors} onChange={handleDoors} className={doors === "0" ? "" : "select"}>
                <option value="0">Portas</option>
                <option value="1">1 ou + Portas</option>
                <option value="2">2 ou + Portas</option>
                <option value="3">3 ou + Portas</option>
                <option value="4">4 ou + Portas</option>
                <option value="5">5 ou + Portas</option>
                <option value="6">6 ou + Portas</option>
                <option value="7">7 ou + Portas</option>
                <option value="8">8 ou + Portas</option>
                <option value="9">9 ou + Portas</option>
                <option value="10">10 ou + Portas</option>
            </select>
            </div>

            <div className="dataSelects">
            <h4>Suítes: </h4>
            <select value={suite} onChange={handleSuite} className={suite === "0" ? "" : "select"}>
                <option value="0">Suítes</option>
                <option value="1">1 ou + Suítes</option>
                <option value="2">2 ou + Suítes</option>
                <option value="3">3 ou + Suítes</option>
                <option value="4">4 ou + Suítes</option>
                <option value="5">5 ou + Suítes</option>
                <option value="6">6 ou + Suítes</option>
                <option value="7">7 ou + Suítes</option>
                <option value="8">8 ou + Suítes</option>
                <option value="9">9 ou + Suítes</option>
                <option value="10">10 ou + Suítes</option>
            </select>
            </div>
            
            <div className="dataSelects">
            <h4>Banheiros: </h4>
            <select value={restroom} onChange={handleRestroom} className={restroom === "0" ? "" : "select"}>
                <option value="0">Banheiros</option>
                <option value="1">1 ou + Banheiros</option>
                <option value="2">2 ou + Banheiros</option>
                <option value="3">3 ou + Banheiros</option>
                <option value="4">4 ou + Banheiros</option>
                <option value="5">5 ou + Banheiros</option>
                <option value="6">6 ou + Banheiros</option>
                <option value="7">7 ou + Banheiros</option>
                <option value="8">8 ou + Banheiros</option>
                <option value="9">9 ou + Banheiros</option>
                <option value="10">10 ou + Banheiros</option>
            </select>
            </div>

    
            {/* <div className="dataSelectsButtons">
             <button className={pets === "sim" ? "" : "btn"} onClick={handleNewPets}><TbBone />Aceita Pets</button>
             <button className={furnished === "sim" ? "" : "btn"} onClick={handleNewFurnished}><TbSofa />Mobilhado</button>
             </div> */}

            <div className="dataSelectsButtonsAction">
                <button  onClick={handleNewSearchProperty}><IoSearchOutline /> Buscar</button>
                <button className="btn" onClick={handleClearItens}><IoClose /> Limpar</button>
        </div>
            </div>
        </div>
    </div>
        </div>
    )
}