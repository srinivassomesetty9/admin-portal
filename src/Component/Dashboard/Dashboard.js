import React from 'react';
import Dashboardscreen from './dashboardscreen/Dashboardscreen';
import "./Dashboard.css";
import PieChart from './chart/PieChart';




export default function Dashboard() {
  return (
    <div className="dashboard">
        <Dashboardscreen />
        <div className='Title'>
        Charts
        </div>
        <PieChart />
    </div>
  )
}
