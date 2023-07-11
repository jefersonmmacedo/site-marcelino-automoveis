import "./contact.css";
import { Footer } from "../../components/Footer/Footer";
import Navbar2 from "../../components/Nav/Navbar";
import {IoMailOpenOutline, IoCallOutline, IoPhonePortraitOutline, IoLogoWhatsapp, IoLocationOutline} from "react-icons/io5"
import { useEffect, useState } from "react";
import api from "../../services/api";

export function Contact() {
    const idCompany = process.env.REACT_APP_CODEUSER;

    const [company, setCompany] = useState();
    useEffect(() => {
      async function loadUser() {
          await api.get(`/company/unic/${idCompany}`).then((res) => {
            setCompany(res.data[0]);
            console.log(res.data)
          }).catch((err) => {
            console.log(err);
          })
      }
  
      loadUser()
    }, [])

    return (
        <div className="Contact">
            <Navbar2/>
                <h2>Fale conosco</h2>
                <h4>Entre em contato conosco, estamos prontos para atendê-lo.</h4>

            <div className="infosContact">

            <div className="BlocksContact">
                <div className="blockContact">
                        <h3><IoMailOpenOutline /> Email</h3>
                        <h5>{company?.email}</h5>
                </div>
                <div className="blockContact">
                        <h3><IoCallOutline  /> Telefone</h3>
                        <h5>{company?.phone}</h5>
                </div>
                <div className="blockContact">
                    <h3><IoLogoWhatsapp /> Whatsapp </h3>
                    <h5>{company?.textWhatsapp} - {company?.whatsapp}</h5>
                    <h5>{company?.textWhatsapp2} - {company?.whatsapp2}</h5>
                    <h5>{company?.textWhatsapp3} - {company?.whatsapp3}</h5>
                </div>
                <div className="blockContact">
                    <h3><IoLocationOutline /> Endereço </h3>
                    <h5>{company?.road}, Nº {company?.number}, {company?.district} - {company?.city} - {company?.uf}</h5>
                </div>
            </div> 

            <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7151.25596436238!2d-42.632824755154935!3d-22.713303188519028!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99db0887e7c699%3A0x37eb2d8a29fdfaf8!2sMarcelino%20Automoveis!5e0!3m2!1spt-BR!2sbr!4v1689093589500!5m2!1spt-BR!2sbr"
                    width="100%" height="400" style={{border:"0px", borderRadius: "20px"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

            </div>

            <Footer/>
        </div>
    )
}

