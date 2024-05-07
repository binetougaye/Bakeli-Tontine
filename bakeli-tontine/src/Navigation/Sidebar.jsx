import React from 'react';
import  './Navigation.css';
import { FaBriefcase } from "react-icons/fa6";
import { Dropdown } from 'antd';
import { RxDashboard } from "react-icons/rx";
import { FiUser } from "react-icons/fi";
import { GiPayMoney } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { Space } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const items = [
    {
      label: <a href="#">Paramètres Généraux</a>,
      key: '0',
    },
    {
      label: <a href="#">Utilisateurs</a>,
      key: '1',
    },
    {
        label: <a href="#">Archives</a>,
        key: '2',
      },
      {
        label: <a href="#">Membres Bloqués</a>,
        key: '3',
      },
  ];
function Sidebar() {
    return (
      <aside className="sidebar">
        <div className='sidebar-top'>
        <h3 className='hach'><FaBriefcase />&nbsp;&nbsp;Bakéli Tontine</h3>
        <ul>
          <li><a href="#"> <RxDashboard className='nav-icon'/>Dashboard</a></li>
          <li><a href="#"><FiUser className='nav-icon' />Utilisateurs</a></li>
          <li><a href="#"> <GiPayMoney className='nav-icon'/>Cotisations</a></li>
          <li>
          <Dropdown menu={{ items}}trigger={['click']}>
           <a onClick={(e) => e.preventDefault()}>
        <Space>
        <IoSettingsOutline className='nav-icon' />
         Paramètres
       <IoIosArrowDown className='tap' />
        </Space>
      </a>
    </Dropdown>
          </li>
        </ul>
        </div>
      </aside>
    );
  }
  export default Sidebar;