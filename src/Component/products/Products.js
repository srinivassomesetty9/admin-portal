import React from 'react';
import "./Products.css";
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Productdetails from './Productdetails';



export default function Products() {
  return (
    <div className='products'>
      <Topbar />
        <div className='contain'>
        <Sidebar />
        <Productdetails />
        </div>
        </div>
  )
}
