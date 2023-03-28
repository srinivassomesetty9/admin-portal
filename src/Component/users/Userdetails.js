import React from 'react';
import "./Userdetails.css";
import Postdata from "../API/Postdata";

export default function Userdetails() {
  return (
    <div className='userdetails'>
    <div className='user'>
    <h2>List of Users</h2>
    <Postdata />
    </div>
    </div>
  )
}
