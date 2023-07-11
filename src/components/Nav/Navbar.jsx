import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/Logo.png'
import { IoPersonOutline, IoHeartOutline, IoNotificationsOutline,
  IoLogOutOutline, IoPersonCircleOutline} from 'react-icons/io5'
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import { AuthContext } from '../../contexts/Auth';
import { useContext } from 'react';
import { ChatCounter } from '../ButtonsCounter/ChatCounter/ChatCounter';
import { SchedulingCounter } from '../ButtonsCounter/SchedulingCounter/SchedulingCounter';
import { NotificationCounter } from '../ButtonsCounter/NotificationCounter/NotificationCounter';

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 1px solid #f1f1f1;
  padding: 0 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  // background: rgba(255, 255, 255);
  background: rgba(255, 255, 255);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description)
  .logo {
    padding: 15px 0;
  }
  .logo a img {
    height: 40px;
  }
  .logo2 {
    display: none;
  }
  .account {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-weight:600;
    color: var(--Text2);
    text-decoration: none;
    list-style: none;
  }
  .account li {
    padding: 18px 10px;
    font-weight: 500;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: var(--Paragraph);
  }
  .account li a{
    text-decoration: none;
    color: var(--Gray)
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .account li a svg{
    margin-right: 2px;
  }
  .account li a:hover{
    color: var(--Primary);
  }
  .account button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    padding: 9px 19px;
    background-color: rgba(255, 255, 255, 0.01);
    border: 1px solid var(--Primary);
    font-weight:600;
    color: var(--Primary);
}
  .account .iconUnic {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(238,238,238,0.5);
    font-weight:600;
    color: var(--Primary);
    font-size:18px;
    margin:5px 5px;
}
  .account .iconUnicAdm {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    padding: 10px;
    background-color: var(--Primary);
    font-weight:600;
    color: var(--White);
    font-size:14px;
    margin:5px 5px;
}
.account .iconUnicAdm svg {
  margin-right: 5px;
}
  .account .iconOut {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    padding: 10px;
    background-color: rgba(238,238,238,0.5);
    font-weight:600;
    color: var(--Primary);
    font-size:18px;
    margin:5px 5px;
}
@media (max-width: 930px) {
  padding: 0 10px;
  .account {
    margin-right:40px;
    justify-content: flex-end;
  }
  @media (max-width: 650px) {
  .logo a img {
    height: 30px;
  }
  @media (max-width: 600px) {
    .account {
      justify-content: flex-end;
    }
    .account .iconOut {
      display: none;
  }
  }
  }
}
`

const Navbar2 = () => {
  const { logout, logout2 } = useContext(AuthContext);
  const Local = localStorage.getItem("suachaveauto");
  const user = JSON.parse(Local);

  const LocalAdm = localStorage.getItem("adm-suachaveauto");
  const userAdm = JSON.parse(LocalAdm);

  function handleLogOut() {
    logout()
  }
  function handleLogOut2() {
    logout2()
  }

  if(user !== null ) {
    readyType()
  }

  
  if(userAdm !== null ) {
    handleLogOut2()
}


  function readyType() {
    if (user?.type === "Agência" || user?.type === "Consultor") {
      handleLogOut()
    }
  }


  function HandleOpenLink(data) {
    window.open(`${data}`, "_self")
  }
  function HandleOpenLink2(data) {
    window.open(`${data}`)
  }

  return (
    <Nav>
      <div className="logo">
        <a href="/">
      <img src={LogoImg} alt="Sua Chave Auto" />
        </a>
      </div>
      <Burger />
      <div className="account">
          <button onClick={() => HandleOpenLink("/faleconosco")}>Fale conosco</button>
      </div>
    </Nav>
  )
}

export default Navbar2