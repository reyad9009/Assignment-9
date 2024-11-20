import { sendPasswordResetEmail } from "firebase/auth";
import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const { forgotPassword, auth } = useContext(AuthContext);
  const emailRef = useRef();

  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    forgotPassword(email)
    .then(() => {
        alert("Password reset email sent successfully! Please check your inbox.");
        window.open("https://mail.google.com", "_blank");
        e.target.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        //console.log(errorCode, errorMessage)
      });
  };

  return (
    <div className="flex justify-center items-center">
      <Helmet><title>Career Kindle | Reset Password</title></Helmet>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <h2 className="text-3xl font-extrabold text-center my-4">
          Reset Your Password
        </h2>
        <form onSubmit={handleForgetPassword} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-semibold">Email</span>
            </label>
            <input
              type="email"
              ref={emailRef} // Connect the ref here
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn bg-[#2196f3] text-lg text-white">
              Reset Password
            </button>
          </div>
        </form>
        <p className="text-center mt-4 mb-6 font-bold">
          <Link className="text-red-500" to="/auth/login">
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
