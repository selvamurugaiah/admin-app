import React from "react";
import "./register.css";



function Register(){
    return(
<div className="pages">
<div className="Register-page">
        <div>
          <h3 className="create">Create an Account!</h3>
        </div>
        <div className="input">
          <div className="psw">
          <input type="text" className="Name" placeholder="Firstname" />
          <input type="text" className="Name" placeholder="Last Name" />
          </div>
          <br />
          <input type="password" className="mail" placeholder="Email Address" />
          <br/>
          <div className="psw">
          <input type="password" className="Name" placeholder="Password" />
          <input type="password" className="Name" placeholder=" Repeat Password" />
          </div>
          <br />
          <div className="checkbox">
            <input type="checkbox" />
            Remember Me
            <br />
          </div>
          <button className="btn5" id="lightblue">
            Login
          </button>
  
          <hr />
          <button className="btn5" id="red">
            <span className="letter">G</span>Login with Google
          </button>
          <button className="btn5" id="blue">
            <span className="letter">f</span>Login with Facebook
          </button>
        </div>
        <hr />
        <div className="footer">
          <p>Forgot Password?</p>
          <p>Create an Account!</p>
        </div>
      </div>
</div>

    )
}

export default Register;


