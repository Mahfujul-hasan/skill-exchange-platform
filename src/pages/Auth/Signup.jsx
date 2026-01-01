import React, { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser, setUser, updateUserProfile, loginWithGoogle } =
    use(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    document.title = "Sign Up | skillSwap";
  }, []);

  //   Email and password register
  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const name = event.target.name.value;
    const userPhoto = event.target.userPicture.value;
    const password = event.target.password.value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must have at least 6 characters, one uppercase, one lowercase, and one special character"
      );
      return;
    }
    // console.log(email, name, userPhoto, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: userPhoto })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: userPhoto });
          })
          .catch((err) => {
            setError(err.code);
          });
        Swal.fire({
          //   title: "Good job!",
          text: "Your are registered successfully",
          icon: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setError(err.code);
      });

    // console.log(user);
  };

  //   google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          //   title: "Good job!",
          text: "Your are logged in successfully",
          icon: "success",
        });
        navigate("/");
        // console.log(result);
      })
      .catch((err) => {
        setError(err.code);
      });
  };

  return (
    <div className="flex items-center justify-center mb-10">
      <div className="card bg-base-100 border border-gray-200 shadow-sm w-full max-w-md ">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center text-[#70B2B2]">
            Please Register
          </h1>
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              {/* Name  */}
              <label className="label flex gap-0">
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="input w-full"
                name="name"
                required
              />

              {/* Picture  */}
              <label className="label flex gap-0">
                Photo Url<span className="text-red-500">*</span>
              </label>
              <input
                type="url"
                className="input w-full"
                name="userPicture"
                required
              />

              {/* Email  */}
              <label className="label flex gap-0">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="input w-full"
                name="email"
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

              <p className="text-red-400 font-medium text-center">{error}</p>

              {/* Register button  */}
              <button
                type="submit"
                className="btn bg-[#70B2B2] text-white text-lg"
              >
                Register
              </button>
            </fieldset>
          </form>
          <p>
            Already have an account? Please{" "}
            <Link to="/auth/login" className="text-blue-400 underline">
              login
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

export default Signup;
