import React, { use, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userLogin, setUser, loginWithGoogle } = use(AuthContext);
  const [error, setError] = useState("");
  const formRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const emailRef= useRef();

  useEffect(() => {
    document.title = "Login| skillSwap";
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    // console.log(email, password);

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          //   title: "Good job!",
          text: "Your are logged in successfully",
          icon: "success",
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.code);
      });
    formRef.current.reset();

    
  };

  //   google login
    const handleGoogleLogin = () => {
      loginWithGoogle()
        .then((result) => {
          setUser(result.user);
          // console.log(result);
          Swal.fire({
          //   title: "Good job!",
          text: "Your are logged in successfully",
          icon: "success",
        });
          navigate(`${location.state ? location.state : "/"}`);
        })
        .catch((err) => {
          setError(err.code);
        });

      
    };

    // handle forget button
    const handleForgetPassword=()=>{
        const email= emailRef.current.value;
        navigate('/auth/forget_password', {state:{email}})
    }
  return (
    <div className="flex items-center justify-center">
      <div className="card bg-base-100 border border-gray-200 shadow-sm w-full max-w-md ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center text-[#70B2B2]">
            Please Login
          </h1>
          <form onSubmit={handleLogin} ref={formRef}>
            <fieldset className="fieldset">
              {/* Email  */}
              <label className="label flex gap-0">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="input w-full"
                name="email"
                ref={emailRef}
                required
              />

              {/* Password  */}
              <label className="label flex gap-0">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="input w-full"
                  name="password"
                  required
                />
                <span
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <IoEyeOff className="absolute right-2 top-2.5 text-lg text-gray-400 z-10" />
                  ) : (
                    <IoEyeSharp className="absolute right-2 top-2.5 text-lg text-gray-400 z-10" />
                  )}
                </span>
              </div>

              {/* forget password  */}
              <div>
                <a onClick={handleForgetPassword}  className="link link-hover">
                  Forgot password?
                </a>
              </div>

              <p className="text-red-400 text-center font-medium">{error}</p>

              {/* login button  */}
              <button className="btn bg-[#70B2B2] text-white text-lg ">
                Login
              </button>
            </fieldset>
          </form>
          <p>
            New to this website? Please{" "}
            <Link to="/auth/signup" className="text-blue-400 underline">
              Sign Up
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn bg-[#ffffff] text-black border-[#e5e5e5] shadow-lg"
          >
            <FcGoogle />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
