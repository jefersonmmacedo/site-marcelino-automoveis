import { useState } from "react";
import Navbar2 from "../../components/Nav/Navbar";
import "./fipeCar.css";
import { mask as masker, unMask } from "remask";

export function FipeCar() {

    const [placa, setPlaca] = useState("")

    function handleRedirect() {
        if(placa === "") {
            return
        }
        window.open(`/consulta-placa/${placa}`, "_self");
    }

    function ChangeMaskPlate(e) {
        const originalValue = unMask(e.target.value);
        const maskedValue = masker(originalValue, [
          "SSS-SSSS",
        ]);
    
        setPlaca(maskedValue)
      }


    return (
        <div className="FipeCar">
            <Navbar2 />
        <div className="blockImage">
            <div className="imageBlock"></div>
        </div>
        <div className="blockSearch">
            {/* <h3>Informe a placa:</h3> */}
            <input type="text" placeholder="Digite a placa" value={placa?.toUpperCase()} onChange={ChangeMaskPlate}/>
            <button onClick={handleRedirect}>Consultar</button>
        </div>
    </div>
    )
}