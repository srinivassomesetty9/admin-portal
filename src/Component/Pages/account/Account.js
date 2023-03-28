import React from 'react'

import Topbar from '../../topbar/Topbar';
import Sidebar from "../../sidebar/Sidebar";
import "./Account.css"
import Accountdetails from './Accountdetails';



export default function Account() {
  return (
    <div className="Account">
    <Topbar />
    <div className="contain">
    <Sidebar />
    <Accountdetails />
    </div>
    </div>
  )
}
