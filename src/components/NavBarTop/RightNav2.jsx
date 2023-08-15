import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoSpeedometerOutline, IoPersonOutline, IoHeart, IoNotificationsOutline, IoLogOutOutline, IoChatboxEllipsesOutline,
        IoHomeOutline, IoLaptopOutline, IoCalendarOutline, IoOptionsOutline, IoFunnelOutline, IoSearchOutline, IoQrCodeOutline, IoMailOutline, IoPhonePortraitOutline, IoLogoInstagram, IoLogoWhatsapp, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5';
        import LogoImg from '../../assets/images/Logo2.png'
import api from '../../services/api';

const UlAdm = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  flex-direction: column;

 .top {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    padding: 10px 40px;
 }
 .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
    border-top: 1px solid var(--BorderHover);
    height: 50px;

 }
 .menu .itensMenu {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 70%;
 }

 .menu .buttonsMenu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 30%;
 }
 .menu .buttonsMenu .iconsMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
 }
 .menu .buttonsMenu .iconsMenu .unicIconMenu{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:5px;
  background-color: var(--BorderHover);
  color: var(--Primary);
  border-radius: 6px;
  margin: 0 3px;
  border: none;
  font-size: 16px;
  text-decoration: none;
 }
 .menu .buttonsMenu .iconsMenu .unicIconMenu:hover {
  background-color: var(--Primary);
  color: var(--White);
 }
 .menu .buttonsMenu .contactWhatsapp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  background-color: var(--Primary);
  color: var(--White);
  border-radius: 20px;
  margin: 0 3px;
  border: none;
  font-size: 14px;
 }
 .menu .buttonsMenu .contactWhatsapp svg {
  font-size: 14px;
  margin-right: 5px;
 }
 .top .logo {
    padding: 15px 0;
  }
  .top .logo a img {
    height: 40px;
  }

  .contact {
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
.contact .contactUnic {
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
    padding: 0px 10px;
    border-left: 1px solid var(--Border);
}

.contact .contactUnic svg {
  font-size: 25px;
  color: var(--Primary);
  margin: 0 10px;
}
.contact .contactUnic .text{
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: var(--BorderHover);
}

.contact .contactUnic .text h4 {
  font-weight: 600;
}
.contact .contactUnic .text h5 {
  font-weight: 700;
  color: var(--BorderHover);
}
.contact .contactUnic .text h4:hover {
 cursor: pointer;
  color: var(--Primary);
}
.contact .contactUnic2 {
   display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 5px;
}

.contact .contactUnic2 svg {
  font-size: 40px;
  color: var(--Primary);
  margin: 0 5px;
}
.contact .contactUnic2 .text{
   display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: var(--BorderHover);
}
.contact .contactUnic2 .text h4 {
  font-weight: 600;
}

.contact .contactUnic2 .text h5 {
  font-weight: 700;
  color: var(--BorderHover);
}

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding:5px;
    font-weight: 700;
  }
  .nav-item2 {
    display: none;
  }
  li a{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-weight: 600;
    color: var(--BorderHover);
    padding: 5px;
    border-radius: 6px;
    margin-left:;
  }
  li a svg {

    margin-bottom: 2px;
    font-size: 16px;
  }
  li a p {
    font-size: 14px;
    font-weight: 700;
  }
  li a:hover{
    padding: 5px;
    color: var(--Primary);
  }

  .nav-item {
    display: flex;
    margin: 2px;
    padding: 5px;
    border-radius: 20px;
  }


 

  @media (max-width: 920px) {
    flex-flow: column nowrap;
    box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 350px;
    padding-top: 1.5rem;
    transition: transform 0.3s ease-in-out;
    background-color: rgba(0,0,0);
    z-index: 98;


    
 .top {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 300px;
  padding: 0px 20px;
}
.menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  border-top: 1px solid var(--Border);
  height: 100%;

}
.menu .itensMenu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
}

.menu .buttonsMenu {
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: 100%;
margin-top: 20px;
}
.menu .buttonsMenu .iconsMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 0px;
}
.menu .buttonsMenu .iconsMenu .unicIconMenu{
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding:5px;
background-color: var(--BorderHover);
color: var(--Primary);
border-radius: 6px;
margin: 3px 5px;
border: none;
font-size: 20px;
text-decoration: none;
}
.menu .buttonsMenu .iconsMenu .unicIconMenu:hover {
background-color: var(--Primary);
color: var(--White);
}
.menu .buttonsMenu .contactWhatsapp {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 10px 15px;
background-color: var(--Primary);
color: var(--White);
border-radius: 20px;
margin: 10px 3px;
border: none;
font-size: 12px;
}
.menu .buttonsMenu .contactWhatsapp svg {
font-size: 12px;
margin-right: 5px;
}
.top .logo {
  padding: 15px 0;
}
.top .logo a img {
  height: 30px;
}

.contact {
   display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  padding-bottom: 10px;
}
.contact .contactUnic {
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 0px;
  border-left: none;
}

.contact .contactUnic svg {
font-size: 25px;
color: var(--Primary);
margin: 0 10px 0 0;
}
.contact .contactUnic .text{
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--BorderHover);
}

.contact .contactUnic2 {
 display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 5px;
  padding: 0px;
}

.contact .contactUnic2 svg {
font-size: 40px;
color: var(--Primary);
margin: 0 5px 0 0;
}
.contact .contactUnic2 .text{
 display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--BorderHover);
}


li {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 0px;
  font-weight: 700;
}
.nav-item2 {
  display: none;
}
li a{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
  color: var(--BorderHover);
  padding: 7px 0px;
  border-radius: 6px;
  margin-left:;
}
li a svg {

  margin-bottom: 2px;
  font-size: 16px;
}
li a p {
  font-size: 14px;
  font-weight: 700;
}
li a:hover{
  padding: 5px 0px;
  color: var(--Primary);
}

.nav-item {
  display: flex;
  margin: 2px;
  padding: 3px 10px;
  border-radius: 20px;
}

@media (max-width: 400px) {
  width: 95%;
}

  }

  }
`;


const RightNav2 = ({ open }) => {
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

    function handleContact(data) {
      const number = parseInt(data?.replace(/[^0-9]/gi, ""));
      window.open(`https://wa.me/+55${number}`)
    }
    function handleMail(data) {
      window.open(`mailto:${data}`)
    }
    
  return (
    <UlAdm open={open}>
      <div className="top">
      <div className="logo">
      <Link to='/'>
      <img src={LogoImg} alt="Logo Sua Chave" />
      </Link>
      </div>

      <div className="contact">
        <div className="contactUnic">
          <IoLogoWhatsapp />
          <div className="text">
            <h5>{company?.textWhatsapp}</h5>
            <h4 onClick={() => handleContact(company?.whatsapp)}>{company?.whatsapp}</h4>
          </div>
        </div>
        <div className="contactUnic">
          <IoLogoWhatsapp />
          <div className="text">
            <h5>{company?.textWhatsapp2}</h5>
            <h4 onClick={() => handleContact(company?.whatsapp2)}>{company?.whatsapp2}</h4>
          </div>
        </div>
        <div className="contactUnic">
          <IoLogoWhatsapp />
          <div className="text">
            <h5>{company?.textWhatsapp3}</h5>
            <h4 onClick={() => handleContact(company?.whatsapp3)}>{company?.whatsapp3}</h4>
          </div>
        </div>

      </div>
      </div>
      <div className="menu">
        <div className="itensMenu">
        <li className='nav-item'>
            <a href='/autos' >
            Autos
            </a>
          </li>
          <li className='nav-item'>
            <a href='/empresa' >
           Empresa
            </a>
          </li>
          <li className='nav-item'>
            <a href='/financiamento' >
            Financiamento
            </a>
          </li>
          <li className='nav-item'>
            <a href='/avaliacao' >
            Avalie seu carro
            </a>
          </li>
          <li className='nav-item'>
            <a href='/faleconosco' >
            Contato
            </a>
          </li>
        </div>

          <div className="buttonsMenu">
            <div className="iconsMenu">
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
           <button className="contactWhatsapp" onClick={() => handleMail(company?.email)} ><IoMailOutline /> {company?.email}</button>
          </div>       
      </div>





    </UlAdm>
  )
}

export default RightNav2
