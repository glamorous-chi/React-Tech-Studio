import React, { useState } from 'react';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import Loader from '../components/Loader';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://blogg-api-v1.onrender.com/login";

    if (!email || !password) {
      console.log("Enter all fields");
      return toast.error("Enter all fields"); //retun this and stop here
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return toast.error("Enter a valid email address");
    }

    const pwdTrim = password.trim();
    if (!password || pwdTrim.length < 6) {
      return toast.error("Password length must be six and more");
    }

    try {
      // sending form data to server
      setLoading(true)
      const { data } = await axios.post(url, {
        email,
        password,

      });

      if (!data?.error) {
        toast.success("Log in successful")
        // redirect user to login
        setTimeout(() => {
          navigate("/")
        }, 5000)

      } else {
        toast.error("Log in failed")
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data
      toast.error(error)
    }
  }


  return (
    <div>
      <ToastContainer />

      <h1>Log in Page</h1>
      <form onSubmit={handleSubmit} className="col-6 d-flex m-auto flex-column justify-content-center">

        <div className="">
          <input
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="password-input-wrapper">
          <input
            className="form-control p-3 mt-3"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? (<FaRegEye className='icon' />) : (<FaEyeSlash className='icon' />)}
          </span>
        </div>

          {/* <button className="btn btn-primary my-3 p-3" onClick={handleSubmit} >
            Log in
          </button> */}
          <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <button class="btn btn-primary" type="button" disabled>
              <>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
              </>    
            </button>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;