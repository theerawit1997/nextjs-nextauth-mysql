import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white text-sm font-medium p-3">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link href="/">
            <span className="bg-black px-5 py-2.5 me-2 mb-2 rounded dark:bg-gray-700 text-lg">
              Test NextAuth
            </span>
          </Link>
          <ul className="flex items-center">
            <li className="mx-1">
              <Link href="/login">
                <button
                  type="button"
                  className="bg-blue-700 hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                  Sign In
                </button>
              </Link>
            </li>
            <li className="mx-1">
              <Link href="/register">
                <button
                  type="button"
                  className="bg-green-700 hover:bg-green-900 focus:ring-4 focus:ring-green-300 rounded-lg px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                >
                  Sign Up
                </button>
              </Link>
            </li>
            <li className="mx-1">              
              <button
                  type="button"
                  className="bg-red-500 hover:bg-red-400 font-bold px-5 py-2.5 me-2 mb-2 border-b-4 border-red-700 hover:border-red-500 rounded"
                >
                  Log out
                </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
