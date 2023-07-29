import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "./OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }
  return (
    <>
      <section>
        <h1 className="text-center text-3xl font-bold mt-3">Forgot PAssword</h1>
        <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
          <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
            <img
              src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="img"
              className="w-full rounded-2xl"
            />
          </div>
          <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
            <form>
              <input
                className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
              />

              <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
                <p className="mb-6 ">
                  Dont have an account?
                  <Link
                    to={"/Sign-up"}
                    className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                  >
                    Register
                  </Link>
                </p>
                <p>
                  <Link
                    to={"/Sign-in"}
                    className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out "
                  >
                    Sign in instead
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-7 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              >
                Send Reset Password
              </button>
              <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                <p className="text-center font-semibold mx-4">OR</p>
              </div>
              <OAuth />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
