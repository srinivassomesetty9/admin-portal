import React from "react";
import './Home.css'
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./Dashboard/Dashboard";

export default function Home(){
    return(
     <div className="home">
         <Topbar />
         <div className="contain">
         <Sidebar />
         <Dashboard />
         </div>
     </div>
    );
    
}