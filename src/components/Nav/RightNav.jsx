import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {IoPersonCircleOutline, IoPersonOutline, IoHeartOutline, IoNotificationsOutline, IoLogOutOutline, IoChatboxEllipsesOutline, IoHomeOutline, IoSpeedometerOutline, IoCalendarOutline } from 'react-icons/io5';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
    font-weight: 600;
    font-size: 14px;
  }
  li a{
    text-decoration: none;
    color: var(--Description)
    font-weight: 600;
  }
  li a:hover{
    color: var(--Primary);
  }
  button {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: var(--Primary);
    border-radius: 20px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  button:hover{
    background-color: var(--ButtonHover);
    color: var(--White);
  }
  .btn {
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    background-color: rgba(237, 50, 55, 0.95);
    border-radius: 20px;
    margin: 5px 0;
    color: var(--White);
    border: none;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;

  }

  btn:hover{
    background-color: var(--Blue);
  }


  @media (max-width: 900px) {
    flex-flow: column nowrap;
    background: rgba(256, 256, 256, 0.95);
    backdrop-filter: blur(4px);
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    border-left: 2px solid #f1f1f1;
    
    li {
      padding: 5px;
      margin: 10px;
    }
    li a {
      color: var(--Primary);
    }
    li a:hover {
      color: var(--Magenta);
    }

    button{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: var(--Primary);
      color: var(--White);
      width: 80%;
      padding: 10px 0;
    }
    button svg {
      margin-right: 1px;
    }

    button:hover{
      background-color: var(--ButtonHover);
    }
    .btn{
      display: block;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color:  rgba(256, 256, 256, 0.1);
      width: 80%;
      padding: 10px 0;
      color: var(--Primary);
    }
    .btn svg {
      margin-right: 1px;
    }

    .btn:hover{
      background-color: var(--PrimaryEnphasis);
      color: var(--Primary);
    }
  }

  }
`;


function HandleOpenLink(data) {
  window.open(`${data}`, "_self")
}


const RightNav = ({ open }) => {
  const { logout } = useContext(AuthContext);

  const Local = localStorage.getItem("suachaveauto");
  const user = JSON.parse(Local);

  function handleLogOut() {
    logout()
  }

  return (
    <Ul open={open}>
       {/* <li className='nav-item'>
            <a href='/imoveis/all'>
              Imóveis
            </a>
          </li> */}
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


         
    </Ul>
  )
}

export default RightNav
