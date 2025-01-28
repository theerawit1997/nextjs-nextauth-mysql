"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

function Loginpage() {
  const router = useRouter();
  const { data: session } = useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    if (session) {
      router.replace("/home");
    }
  }, [session, router]);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

    let isValid = true;
    const errors = {};

    if (!email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters.";
      isValid = false;
    } else if (!passwordRegex.test(password)) {
      errors.password = "Password must include a letter and a number.";
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid email or password.");
        return;
      }

      router.replace("/home");
    } catch (error) {
      console.error("Login error:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-6">
          <div className="col-start-2 col-span-4">
            <div className="flex justify-center">
              <h2 className="text-2xl text-black">Sign In</h2>
            </div>
            {error && (
              <div className="col-span-4 p-2 bg-red-600 text-white">{error}</div>
            )}
          </div>
          <div className="col-start-2 col-span-4 p-4 bg-gray-100">
            <form onSubmit={handleSubmit}>
              <label className="block p-2">
                <span className="font-medium text-slate-700">Email</span>
                <input
                  type="email"
                  name="email"
                  className={`mt-1 px-3 py-2 bg-white border ${
                    fieldErrors.email
                      ? "border-red-500"
                      : "border-slate-300 focus:border-sky-500"
                  } shadow-sm placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm`}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-sm">{fieldErrors.email}</p>
                )}
              </label>
              <label className="block p-2">
                <span className="font-medium text-slate-700">Password</span>
                <input
                  type="password"
                  name="password"
                  className={`mt-1 px-3 py-2 bg-white border ${
                    fieldErrors.password
                      ? "border-red-500"
                      : "border-slate-300 focus:border-sky-500"
                  } shadow-sm placeholder-slate-400 focus:outline-none block w-full rounded-md sm:text-sm`}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                {fieldErrors.password && (
                  <p className="text-red-500 text-sm">{fieldErrors.password}</p>
                )}
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
              Don&apos;t have an account?{" "}
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