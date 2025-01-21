"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Registerpage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name && !password && !confirmpassword && !email) {
      setError("please enter all input");
      return;
    }

    if (!name) {
      setError("please enter name");
      return;
    }

    if (!password) {
      setError("please enter password");
      return;
    }

    if (!confirmpassword) {
      setError("please enter confirmpassword");
      return;
    }

    if (password != confirmpassword) {
      setError("password not match");
      return;
    }

    if (!email) {
      setError("please enter email");
      return;
    }
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setConfirmpassword("");
    setEmail("");
    setError("");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-6 ">
          <div className="col-start-2 col-span-4">
            <label className="block p-2">
              <div className="flex justify-center">
                <span className="px-2 py-2 me-2 mb-2 text-2xl text-black">
                  Register
                </span>
              </div>
            </label>
          </div>
          {error && (
            <div className="col-start-2 col-span-4 p-2">
              <div className="flex justify-end">
                <span className="bg-red-600 px-2 py-2 me-2 mb-2 rounded dark:bg-red-800 text-white">
                  {error}
                </span>
              </div>
            </div>
          )}
          <div className="col-start-2 col-span-4 p-4 bg-gray-200">
            <form onSubmit={handleSubmit}>
              <label className="block p-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                  User name
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="block p-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <label className="block p-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                  Confirm Password
                </span>
                <input
                  type="password"
                  name="confirmpassword"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Confirm password"
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
              </label>
              <label className="block p-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <div className="flex justify-center p-2">
                <button
                  type="submit"
                  className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded mx-1.5"
                >
                  Sign Up
                </button>
                <button
                  type="reset"
                  className="bg-transparent hover:bg-yellow-500 text-yellow-700 font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded mx-1.5"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div className="col-start-2 col-span-4 p-4">
            <p>
              Do you have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Sign in now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registerpage;
