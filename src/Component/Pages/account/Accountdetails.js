import React from 'react';
import "./Accountdetails.css";
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Accountdata from '../../API/Accountdata';

function Accountdetails() {
  return (
    <div className='accountdetails'>
        <div className='featuredItem'>
        <h2>My Account</h2><br/>
        Username:<br/><br/>
        Mail:<br/><br/><br/><br/><br/>

        <Accountdata />
        <Link to="/">
              <Button >Logout</Button>
              </Link>
        </div>
        </div>
)
}
export default Accountdetails;