import React from 'react';
import "./Users.css";
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Userdetails from './Userdetails';
//import 'bootstrap/dist/css/bootstrap.css';


export default function Users() {
  return (
    <div className='users'>
      <Topbar />
        <div className='contain'>
        <Sidebar />
        <Userdetails />
        </div>
        </div>
  )
}
