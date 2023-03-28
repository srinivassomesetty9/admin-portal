import React from 'react';
import "./Reports.css";
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Reportsinfo from './Reportsinfo';



export default function Activity() {
  return (
    <div className='reports'>
      <Topbar />
        <div className='contain'>
        <Sidebar />
        <Reportsinfo />
        </div>
        </div>
  )
}
