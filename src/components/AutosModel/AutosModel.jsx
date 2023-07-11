import "./autosModel.css"
import suv from "../../assets/images/models/suv.jpg";
import hatch from "../../assets/images/models/hatch.jpg";
import sedan from "../../assets/images/models/sedan.jpg";
import picape from "../../assets/images/models/picape2.jpg";
import eletrico from "../../assets/images/models/eletrico.jpg";

export function AutosModel() {
    return (
        <div className="AutosModel">
            <div className="UnicModel">
                <img src={suv} alt="" />
                <h3>SUVs</h3>
            </div>
            <div className="UnicModel">
                <img src={hatch} alt="" />
                <h3>Hatches</h3>
            </div>
            <div className="UnicModel">
                <img src={sedan} alt="" />
                <h3>Sedans</h3>
            </div>
            <div className="UnicModel">
                <img src={picape} alt="" />
                <h3>Picapes</h3>
            </div>
            <div className="UnicModel">
                <img src={eletrico} alt="" />
                <h3>Elétricos</h3>
            </div>
        </div>
    )
}