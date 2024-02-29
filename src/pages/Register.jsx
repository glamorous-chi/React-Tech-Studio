import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

import "../css/About.css"
// import { useForm } from "react-hook-form";

const Register = () => {
//   const {register,
//     formState: { errors },
//   }  = useForm();
  // hooks
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // api url
    const url = "https://blogg-api-v1.onrender.com/register";

    // validation
    if (!username || !email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields"); //retun this and stop here
    }

    // Email validation
    const emailRegex = /\s+@\s+\.\s+/;
    if(!emailRegex.test(email)){
      return toast.error("Enter a valid email address");
    }

    // Username validation
    const userNameTrim = username.trim();
    if(!username || userNameTrim.length < 3){
      return toast.error("Username is required");
    }

    // Username validation
    const pwdTrim = password.trim();
    if(!password || pwdTrim.length < 6){
      return toast.error("Password length must be six and more");
    }

    try {
        // sending form data to server
      const { data } = await axios.post(url, {
        username,
        email,
        password,
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Registration successful")
        // redirect user to login
        setTimeout(()=>{
            navigate("/login")
        }, 5000)
      }else{
        toast.error("Registration failed")
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
    }
  };

  
  // console.log(username);
  return (
    <div>
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit} className="col-6 d-flex m-auto flex-column justify-content-center">
        <div className="">
          <input                        //{...register("username",{required: true})}
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className="">
          <input                                // {...register("email",{required: true, pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* {errors.email && <p>email required.</p> } */}
        </div>
        <div className="password-input-wrapper">
          <input                                      //{...register("password", {required: true, pattern: /.{8,16}$/})}
            className="form-control p-3"
            type={showPassword? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span onClick = {() => setShowPassword(!showPassword)}>
            {showPassword ?  (<FaRegEye className='icon' />) :  ( <FaEyeSlash className='icon'/>)}
          </span>
        </div>

        <button
          className="btn btn-primary my-3 p-3"
          onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;