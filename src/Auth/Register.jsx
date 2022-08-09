import React from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/Authentication";
import { useNavigate } from "react-router-dom";
export default function Register() {
  let navigate=useNavigate();
  async function userRegister(e) {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;
    if (!fname || !email || !pass || !cpass) {
      alert("all Fields are Mendetory");
    } else if (pass === cpass) {
      createUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate('/');
          alert("Register Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if (errorMessage) {
            alert("Email already Exist");
          }
        });
    } else {
      alert("passwords should to match");
    }
  }

  return (
    <>
      {/* <!-- component --> */}
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              id="fname"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              id="email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              id="pass"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
              id="cpass"
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-700 text-white hover:bg-blue-800 focus:outline-none my-1"
              onClick={userRegister}
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </>
  );
}
