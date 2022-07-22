import React, { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
 


export default function SignUp(props) {
  const navigate =useNavigate()
  let [authMode, setAuthMode] = useState("signin");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const createUser =   (e) => {
    console.log("hi")
    
    e.preventDefault()
     fetch(`http://localhost:6700/user/register`, {
      
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
      }),
    })
    
    .then(res => res.json())
    .then(data => {
      navigate("/")
      console.log("data", data)
    })
  }

  const loginUser = async (e) => {

    e.preventDefault()
     fetch(`http://localhost:6700/user/login`, {
      
      
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        
        email,
        password,
      }),
    })
    
    .then(res => res.json())
    .then(data => {

     
      navigate("/")
      console.log("data", data)
    })
  }


  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleFirstName(e) {
    setFirstName(e.target.value)
  }
  function handleLastName(e) {
    setLastName(e.target.value)
  }
  function handlePassword(e) {
    console.log("password check")
    setPassword(e.target.value)

  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={ (e) => loginUser(e)} >
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
              value = {email} 
              onChange={(e) => handleEmail(e)}
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
              value = {password} 
              onChange={(e) => handlePassword(e)}
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={ (e) => createUser(e)}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              value={firstName} 
              onChange={(e) => handleFirstName(e)}
              name = "firstName"
              type="text"
              className="form-control mt-1"
              placeholder="e.g David"
            />
          </div>
          <div className="form-group mt-3">
            <label>Last Name</label>
            <input
              value = {lastName} 
              name="lastName"
              onChange={(e) => handleLastName(e)}
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jackson"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
            name="email"
              value = {email} 
              onChange={(e) => handleEmail(e)}
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
            name="password"
              value = {password} 
              onChange={(e) => handlePassword(e)}
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
}

