import React from 'react';
import { Link} from 'react-router-dom';
import './Login.css';

  function Login() {
  return (
    <div className="main">
    <div className="sub-main">
      <div>
        <h2>Sign in</h2>
        <h4>Access to Admin Portal </h4>
        <div className="Details">Email</div>  
        <input type="email" className="name" />
        <div className="Details"> Password </div>
         <div><input type="password"  className="name"/>
         </div>
         <div className="login-button">
         <nav>
          <Link to="/Home">
              <button type="submit" className="login-button1">Next</button>
              </Link>
          </nav>    
         <br /><br />
        </div>
      </div>
    </div>
    </div>
  
  );
 }
export default Login;