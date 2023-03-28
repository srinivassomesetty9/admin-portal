import React from 'react';
import "./Activityinfo.css";
import BarChart from '../Dashboard/chart/BarChart';
export default function Activityinfo() {
  return (
    <div className='activityinfo'>
    <div className='activitybody'>
    <h2>Activites</h2>
    <BarChart />
    </div>
    </div>
  )
}
