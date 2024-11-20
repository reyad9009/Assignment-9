import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    if (name.length < 5) {
      setError({ ...error, name: "must be more the 5 character long" });
      return;
    }
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");
    //console.log({ name, email, photo, password });
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      return;
    }
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
           // console.log(err);
          });
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
      });
  };
  // for google signIn
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
       // console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
       // console.log("Error", error.message);
      });
  };
  return (
    <div className="min-h-scree flex justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="text-2xl font-extrabold text-center ">Register your account</h2>
        <form onSubmit={handleSubmit} className=" px-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {error.name && (
            <label className="label text-red-600">{error.name}</label>
          )}

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>

            <label className="input input-bordered flex flex-row items-center justify-between gap-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input -ml-5 border-none hover:border-none"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs"
              >
                {showPassword ? (
                  <FaEyeSlash className="text-lg"></FaEyeSlash>
                ) : (
                  <FaEye className="text-lg"></FaEye>
                )}
              </button>
            </label>
          </div>

          <div className="flex w-full flex-col mt-5">
            <div className="card bg-base-300 rounded-box grid place-items-center">
              <button className="btn btn-primary w-full">Register</button>
            </div>
            <div className="divider">OR</div>
          </div>
        </form>

        <div className="card rounded-box flex flex-col items-center justify-center gap-2">
          <span className="font-semibold">Continue with Google</span>
          <button
            className="flex justify-center items-center"
            onClick={handleGoogleSignIn}
          >
            <FcGoogle className="text-4xl" />
          </button>
        </div>

        <p className="text-center pb-5 pt-5">
          Already have an account?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
