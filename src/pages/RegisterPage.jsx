import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import "../css/About.css"
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {register,handleSubmit,formState: { errors }}  = useForm();

  // hooks
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("false");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const onSubmit = async (data,e) => {
    // console.log(e);
    // e.preventDefault();
    // e.persist();
    // api url
    const url = "https://blogg-api-v1.onrender.com/register";
   

    try {
        // sending form data to server
        setLoading(true);
      const { data } = await axios.post(url, {
        username,
        email,
        password
      });

      // check for successful registration
      if(!data?.error){
        toast.success("Registration successful")
        setLoading(false)
        // redirect user to login
        setTimeout(()=>{
            navigate("/login")
        }, 5000)
      }else{
        toast.error("Registration failed")
      }
    } catch (err) {
      console.log(err);
      const { error } = err?.response?.data //Error gotten from backend
      toast.error(error)
    }
  };

  
  // console.log(username);
  return (
    <div>
      <ToastContainer />
      <h1>Register Page</h1>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="col-6 d-flex m-auto flex-column justify-content-center">
        <div className="">
          <input {...register("username",
          {required: {
            value: true,
            message: "Username is required"}})}
            className="form-control p-3"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
           {/* toast.show({errors.username?.message}) */}
        </div>

        <div className="">
          <input {...register("email",
          {required: {
            value: true,
            message:"Email is required"
            }, 
            pattern:{
                value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message:"Invalid email"
            },
            })}
            className="form-control p-3 my-3"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
            setEmail(e.target.value);
            }}
            
          />
          
          <p className="error">{errors.email?.message}</p>
          {/* errors.email && <p>email required.</p>  */}
        </div>

        <div className="password-input-wrapper">
          <input {...register("password", 
          {required: {
            value: true,
            message:"Password is required"
          }, pattern:{
            value:/.{8,16}$/,
            message:"Please enter a valid password"
        },
          })}
            className="form-control p-3"
            type={showPassword? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
           <p className="error">{errors.password?.message}</p>
           
          <span onClick = {() => setShowPassword(!showPassword)}>
            {showPassword ?  (<FaRegEye className='icon' />) :  ( <FaEyeSlash className='icon'/>)}
          </span>
        </div>

        <button
          className="btn  btn-primary my-3 p-3 w-100"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            
              <>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Loading...</span>
              </>    
            
          ) : (
            "Login"
          )}
        </button>

        
      </form>
    </div>
  );
};

export default RegisterPage;