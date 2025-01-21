"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";

function Loginpage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-6 ">
          <div className="col-start-2 col-span-4">
            <label className="block p-2">
              <div className="flex justify-center">
                <span className="px-2 py-2 me-2 mb-2 text-2xl text-black">
                  Sign In
                </span>
              </div>
            </label>
          </div>
          <div className="col-start-2 col-span-4 p-4 bg-gray-100">
            <form action="">
              <label className="block p-2">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block font-medium text-slate-700">
                  User name
                </span>
                <input
                  type="text"
                  name="name"
                  className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your name"
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
                />
              </label>
              <div className="flex justify-center p-2">
                <button
                  type="submit"
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-1.5"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
          <div className="col-start-2 col-span-4 p-4">
            <p>
              Don't have an account?{" "}
              <Link href="/register" className="text-green-500 hover:underline">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
