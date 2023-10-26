import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import LogoImg from '../../assets/images/Logo.png'
import logo from '../../assets/images/LogoSuaChave2.png';
import "./footerSlim.css"
import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";

export function FooterSlim() {
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
    const date = new Date().getFullYear();
    return (
        <div className="FooterSlim">
            <div className="top">
            <div className="image">
                <a href='/'>
                <img src={LogoImg} alt="Logo Sua Chave" />
                </a>
            </div>

            <div className="icons">
            {company?.instagram === "" ? "" :
            <a className="unicIconMenu" href={company?.instagram} target='_Blank'><IoLogoInstagram /></a>
          }
            {company?.facebook === "" ? "" :
          <a className="unicIconMenu" href={company?.facebook} target='_Blank'><IoLogoFacebook /></a>
            }
            {company?.linkedin === "" ? "" :
                <a className="unicIconMenu" href={company?.linkedin} target='_Blank'><IoLogoLinkedin /></a>
            }
            </div>
            </div>


            <div className="copy">
            <h5>© {company?.fantasyName} {date}. Todos os direitos reservados</h5>

            <div className="dev">
                   
                    <a href="https://suachaveauto.com.br" target="_blank" rel="noreferrer">
                        <img src={logo} alt="Logo Sua chave" />
                    </a>
                    </div>
            </div>

        </div>
    )
}