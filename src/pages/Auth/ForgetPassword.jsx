import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import {  useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";



const ForgetPassword = () => {
  const { forgetPassword } = use(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail]=useState("");
  const navigate = useNavigate()
//   const navigate = useNavigate();
const location= useLocation()
useEffect(()=>{
    if(location.state?.email){
        setEmail(location.state.email)
    }
},[location.state, setEmail])

console.log(location);


  

  // forget password
  const handleLogin = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;



    forgetPassword(userEmail)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: `Password reset link sent! Please check your Gmail (${userEmail}) and Please login again`,
          icon: "success",
        });
        window.open("https://mail.google.com")
      })
      .catch((err) => setError(err.code));
      navigate('/auth/login')
    
  };
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 border border-gray-200 shadow-sm w-full max-w-md ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center text-[#70B2B2]">
            Forgot Password
          </h1>
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              {/* Email  */}
              <div className="flex gap-3">
                <label className="label flex gap-0 text-base font-medium">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="input w-full"
                  name="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  required
                />
              </div>
              <p className="text-red-400 text-center font-medium">{error}</p>

              {/* login button  */}
              <button className="btn bg-[#70B2B2] text-white text-lg ">
                Send
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
