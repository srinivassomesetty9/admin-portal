import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import Topbar from '../../topbar/Topbar'
import "./Settings.css"
import Settingslist from '../settings/Settingslist'


export default function Settings() {
  return (
    <div className="settings">
    <Topbar />
    <div className="contain">
    <Sidebar />
    <Settingslist />
    </div>
    </div>
  )
}
