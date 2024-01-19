import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Login.css'
const Login=()=>
{
    const history=useNavigate();
    const[login,setLogin]=useState(true);
  return(
    <>
    { login &&
      <div class="loginbox">
          <h1>Login Here</h1>
          <form>
              <p>Username</p>
              <input type="text" name="" placeholder="Enter Username" required />
              <p>Password</p>
              <input type="Password" name="" placeholder="Enter Password" required />
              <input type="submit" name="" value="Login" onClick={()=>{history("/")}}/><br></br>
              <a href="#">Forget your Password?</a><br></br>
              <a onClick={()=>setLogin(!login)} style={{cursor:"pointer"}}>Don't have account?</a>
          </form>
      </div>
    }
    {
        !login &&
        <div class="loginbox">
        <h1>Login Here</h1>
        <form>
            <p>Username</p>
            <input type="text" name="" placeholder="Enter Username" required />
            <p>Email</p>
            <input type="text" name="" placeholder="Enter Email" required />
            <p>Password</p>
            <input type="Password" name="" placeholder="Enter Password" required />
            <input type="submit" name="" value="SignUp" onClick={()=>setLogin(!login)} /><br></br>
        </form>
    </div>
    }
    </>  
  )

}

export default Login