"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

function Registerpage() {
  const { data: session } = useSession();
  if (session) redirect('/home');

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateInputs = () => {
    //Regular expressions, or regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[a-zA-Z0-9 _-]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    if (!name || !email || !password || !confirmpassword) {
      displayError("All fields are required.");
      return false;
    }
    if (!nameRegex.test(name)) {
      displayError(
        "Name can only contain letters, numbers, spaces, dashes, and underscores."
      );
      return false;
    }
    if (!emailRegex.test(email)) {
      displayError("Invalid email format.");
      return false;
    }
    if (password.length < 8) {
      displayError("Password must be at least 8 characters long.");
      return false;
    }
    if (!passwordRegex.test(password)) {
      displayError("Password must contain at least one letter and one number.");
      return false;
    }
    if (password !== confirmpassword) {
      displayError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const displayError = (message) => {
    setError(message);
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsLoading(true);
    try {
      const req = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, password, email }),
        }
      );

      const res = await req.json();

      if (req.ok) {
        handleReset();
        const form = e.target;
        form.reset();
        setSuccess(res.message);
      } else {
        displayError(res.message);
      }
    } catch (error) {
      displayError("An error occurred. Please try again. " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setName("");
    setPassword("");
    setConfirmpassword("");
    setEmail("");
    setError("");
    setSuccess("");
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-6 ">
          <div className="col-start-2 col-span-4">
            <div className="flex justify-center p-4">
              <h2 className="text-2xl text-black">Register</h2>
            </div>
          </div>
          {error && (
            <div className="col-start-2 col-span-4 p-2 bg-red-600 text-white">
              {error}
            </div>
          )}
          {success && (
            <div className="col-start-2 col-span-4 p-2 bg-green-600 text-white">
              {success}
            </div>
          )}
          <div className="col-start-2 col-span-4 p-2 bg-gray-200">
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
                  {isLoading ? "Signing Up..." : "Sign Up"}
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
              Already have an account?{" "}
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
