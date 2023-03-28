import React from 'react';
import "./Activity.css";
import Sidebar from '../sidebar/Sidebar';
import Topbar from '../topbar/Topbar';
import Activityinfo from './Activityinfo';



export default function Activity() {
  return (
    <div className='activity'>
      <Topbar />
        <div className='contain'>
        <Sidebar />
        <Activityinfo />
        </div>
        </div>
  )
}
