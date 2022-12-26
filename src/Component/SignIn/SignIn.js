import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fbImage from "../../Assets/fbImage.svg"
import "./SignIn.css"
import { useDispatch } from "react-redux";
import {useNavigate} from "react-router-dom";
import {signItUp} from "../actionreducers/actioncreators/index"

function SignIn() {
  const navigate =useNavigate();
  const dispatch =useDispatch();
  const [fields, setFields] = useState({
    email:"",
    password:""
  })
 console.log(fields);
  const onchange = (e)=>{
    const value = e.target.value;
    const name = e.target.name;
    setFields({...fields, [name]:value})
  }
  function signUpData(e){
    e.preventDefault();
    dispatch(signItUp(navigate,fields))
    
    }
  console.log(fields);
  return (
    <div className="container d-flex align-items-center justify-content-around mx-auto LoginPage">
    <div className=" leftDiv d-flex flex-column align-items-center mt-5">
        <h1 className='text-primary'><strong>TASKEP</strong></h1>
        <p className="text-center m-auto">
            TaskEp is designed to save and update your daily task.
        </p>
    </div>


    <div className="rightDiv d-flex flex-column align-items-center rounded-3 bg-white py-3">
        <input className="loginInput px-2 py-2 my-2 mx-4 border border-1 
        rounded-2" type="text" placeholder="Email address or phone number" name='email' onChange={onchange} value={fields.email} />
        <input className=" loginInput px-2 py-2 my-2 mx-4 border border-1 
        rounded-2" type="password" placeholder="Password" name='password' onChange={onchange} value={fields.password} />
        <button   className="
         bg-primary btn btn-primary
        text-white my-2 py-2 mx-4 rounded-2 border-0 loginBtn "type="submit" onClick={signUpData}>Log In</button>
        
        <a className="
        forgotPassword
        text-center my-2 text-decoration-none">Forgotten password?</a>
        <hr className="my-2 mx-2" />
        <Link to='/sign-up' className="
        text-white my-2 py-3 px-4 rounded-2 mx-auto border-0 createAccountBtn text-decoration-none">
        Create New Account
        </Link>
        <span className="absolute text-center"><Link to='/home' className="loginLink text-decoration-none">Login</Link> as an Admin.</span>
    </div>
</div>
   
  )
}

export default SignIn
