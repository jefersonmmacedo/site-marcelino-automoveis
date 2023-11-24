import { useParams } from "react-router-dom";
import "./fipeCarData.css";
import { useEffect, useState } from "react";
import api from "../../services/api";
import Navbar2 from "../../components/Nav/Navbar";
import { mask as masker, unMask } from "remask";
import apiFipe from "../../services/apiFipe";
import Navbar from "../../components/NavBarTop/Navbar";

export function FipeCarData() {
    const {placa} = useParams()

    const [carsFipe, setCarsFipe] = useState([])
    const [newPlaca, setNewPlaca] = useState("")
    const [failure, setFailure] = useState(0)

    useEffect(() => {
        async function loadFipeCarData() {
            const dataPlaca = {
                "placa": placa
                }
            await apiFipe.post("/fipe", dataPlaca).then((res) => {
                setCarsFipe(res.data);
                console.log(res.data);
                if(carsFipe.fipe?.length === 0) {
                    console.log([]);
                }
            }).catch((err) => {
                console.error(err);
            });
            }

            loadFipeCarData()
    }, [])


    async function loadFipeDataCar() {
        if(newPlaca === "") {
            return
        }
        window.open(`/consulta-placa/${newPlaca}`, "_self");
        }

        
    function ChangeMaskPlate(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "SSS-SSSS",
        ]);
    
        setNewPlaca(maskedValue)
      }

      function loadData() {
        setTimeout(() => {
            if(carsFipe?.length === 0) {
                setFailure(1)
            }
          }, "5000")

      }

      loadData()



    return (
        <div className="FipeCarData">
            <Navbar />
            {failure === 1 && carsFipe?.msg === "Limite diário de consultas atingido. Por favor entre em contato com o suporte através do contato@placafipe.com.br. Limite diário: 50 consultas" ?
            ""
            : carsFipe?.msg?.includes("Veículo não encontrado para a placa") ? ""
        : <div className="car">
           <h2>{carsFipe?.informacoes_veiculo?.marca} - {carsFipe?.informacoes_veiculo?.modelo}</h2>
           <h4>Cor:<span> {carsFipe?.informacoes_veiculo?.cor?.toUpperCase()}</span></h4>
           <h4>Ano Modelo:<span> {carsFipe?.informacoes_veiculo?.ano}/{carsFipe?.informacoes_veiculo?.ano_modelo}</span></h4>
           <h4>Cidade/Estado(UF):<span> {carsFipe?.informacoes_veiculo?.municipio}/{carsFipe?.informacoes_veiculo?.uf}</span></h4>
           <h4>Seguimento:<span> {carsFipe?.informacoes_veiculo?.segmento}/{carsFipe?.informacoes_veiculo?.sub_segmento}</span></h4>
            </div>
             }

            {carsFipe?.length === 0 || carsFipe?.msg === "Limite diário de consultas atingido. Por favor entre em contato com o suporte através do contato@placafipe.com.br. Limite diário: 50 consultas" ? "" :
             <div className="versions">
               {carsFipe?.fipe?.map((car) => {
                return (
                    <div className="versionUnic">
                    <h4>{car.modelo}</h4>
                    <div className="text">
                    <h5>Ano Modelo: </h5>
                    <h5><span>{car.ano_modelo}</span></h5>
                    </div>
                    <div className="text">
                    <h5>Cód. Fipe: </h5>
                    <h5> <span>{car.codigo_fipe}</span></h5>
                    </div>
                    <div className="text">
                    <h5>Mês referência:</h5>
                    <h5><span>{car.mes_referencia?.toUpperCase()}</span></h5>
                    </div>
                    <div className="text">
                    <h5>Combustível:</h5>
                    <h5><span>{car.combustivel}</span></h5>
                    </div>

                    <div className="value">
                        <h4>Valor: R${car.valor}</h4>
                    </div>
                </div>
                )
               })}
             </div>
             }

{
failure === 1 && carsFipe?.msg === "Limite diário de consultas atingido. Por favor entre em contato com o suporte através do contato@placafipe.com.br. Limite diário: 50 consultas" ?
            <div className="msgError">
                <h3>Falha na busca das informações</h3>
                <h4>Desculpe. Ocorreu um erro ao buscar as informações do veículo. Tente novamente em alguns instantes</h4>
            </div>
: carsFipe?.msg?.includes("Veículo não encontrado para a placa") ?
            <div className="msgError">
                <h3>Falha na busca das informações</h3>
                <h4>Desculpe. Veículo não encontrado para a placa {placa} </h4>
            </div>
                : ""
               }

             <div className="new">
<h3>Nova consulta:</h3>
<div className="searchPlaca">
                <input type="text" placeholder="Digite a placa" value={newPlaca?.toUpperCase()} onChange={ChangeMaskPlate}/>
                <button onClick={loadFipeDataCar}>Buscar</button>
            </div>
             </div>



        </div>
    )
}