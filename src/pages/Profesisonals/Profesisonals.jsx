import "./profesisonals.css"
import Navbar2 from "../../components/Nav/Navbar";
import { Professional } from "../../components/Professional/Professional";

export function Profesisonals() {
    return (
        <div className="Profesisonals">
            <Navbar2 />

            <h2>Profissionais</h2>

            <Professional />
            <Professional />
            <Professional />
            <Professional />
        </div>
    )
}