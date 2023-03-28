import React from 'react';
import "./Dashboardscreen.css"

export default function Dashboardscreen() {
  return (
    <div><div className="Header">
    <div className="Title">
    Dashboard
    </div>
   <div className="featured">
   <div className="featuredItem">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="darkblue" className="bi bi-people-fill" viewBox="0 0 16 16">
  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
  <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
  <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
</svg>
    <span className="featuredTitle ">Users</span>
    <div className="featuredContainer">
    {/* <span className="featuredValue">3,122</span> */}
    </div>
    <div className="featuredRate">
    <span className="featuredMonth"> This Month</span>
      </div>
      </div>
      <div className="featuredItem">
    <span className="featuredTitle ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="lightgreen" className="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg> Orders Created</span>
    <div className="featuredContainer">
    {/* <span className="featuredValue">27</span> */}
    </div>
    <div className="featuredDown">
    <span className="featuredMonth"> This Month</span>
      </div>
      </div>
      <div className="featuredItem">
    <span className="featuredTitle ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-calendar2-event-fill" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zm9.954 3H2.545c-.3 0-.545.224-.545.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5zM11.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
</svg>Orders Expired</span>
    <div className="featuredContainer">
    {/* <span className="featuredValue">21</span> */}
    </div>
    <div className="featuredDown">
    <span className="featuredMonth"> This Month</span>
      </div>
      </div>
      <div className="featuredItem">
    <span className="featuredTitle ">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orange" className="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg>Total Orders</span>
    <div className="featuredContainer">
    {/* <span className="featuredValue">
      92.7%</span> */}
    </div>
    <div className="featuredRate">
    <span className="featuredMonth"> This Month</span>
      </div>
      </div>
      </div>
      </div></div>
  )
}
