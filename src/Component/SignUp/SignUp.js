import React from 'react'
import { Link } from 'react-router-dom'
import "./SignUp.css"
import signuppic from "../../Assets/signUppic.jpg"

function SignUp() {
  return (
    <div className='signUp d-flex flex-row align-items-center justify-content-between'>
      <div className='leftDiv'>
        <img src={signuppic} className="signuppic" />
        <div className='imgText'>
          <h1 className='text-center welcomeText'>
            WELCOME
          </h1>
          <h5 className='text-center'>
            To keep connected with us please <br /> login with your personal info
          </h5>
        </div>
      </div>
      <div className='SignuprightDiv text-center d-flex flex-column text-center justify-content-center'>
        <div className='px-1 formDiv bg-white rounded-5 d-flex'>
          <h1 className='createAcntHeading px-0 mx-0 '>
            Create Account
          </h1>
          <p className='text-center'>
            or use your email for registration
          </p>
          <form className=''>
            <div class="row mb-3">
              <div class="col-sm-12">
                <input type="name" class="form-control signUpInputs" id="name" placeholder='Name' />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-sm-12">
                <input type="email" class="form-control signUpInputs" id="inputEmail3" placeholder='Email' />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-sm-12">
                <input type="password" class="form-control signUpInputs" id="inputPassword3" placeholder='Password' />
              </div>
            </div>
            <button type="submit" class="btn w-50 my-3 signUpBtn">Sign Up</button>
          </form>
          <Link to="/sign-in" className='alreadyAcnt'>
          <p className="text-center my-0">
                    Already have an account?
                  </p>
          </Link>
        </div>
      </div>

    </div>
  )
}

export default SignUp
