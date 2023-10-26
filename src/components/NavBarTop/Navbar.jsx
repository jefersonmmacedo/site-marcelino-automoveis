import React, { useContext } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import LogoImg from '../../assets/images/Logo.png'
import { AuthContext } from '../../contexts/Auth';


const Nav = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 97;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  font-size: 14px;
  color: var(--Description);
  box-shadow: 1px 1px 3px 1px rgba(255, 255, 255, 0.2);

.logotipo {
    display: none;
  }



@media (max-width: 920px) {
  height: 60px;
  padding: 0 20px;
  .account {
    margin: 20px 0;
    width: 100%;
    justify-content: center;
  }

.logotipo {
  display: block;
    padding: 10px 0;
  }
.logotipo a img {
    height: 35px;
  }



  @media (max-width: 650px) {


  @media (max-width: 600px) {


  }
  }
}

`



const Navbar = () => {

  
  return (
    <Nav>
      <div className="logotipo">
      <a href='/'>
      <img src={LogoImg} alt="Logo Sua Chave" />
      </a>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar


