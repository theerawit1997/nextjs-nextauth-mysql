"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation'

function Homepage() {
  const { data: session } = useSession();
  if (!session) redirect("/login");
  console.log(session);

  return (
    <div>
      <Navbar session={session}/>
      <div className="flex-grow text-center p-10">
        <h3 className="text-5xl">Home page</h3>
        <h3 className="text-5xl">Welcome, {session?.user?.name}</h3>
        <p className="text-2xl mt-3">Your email: {session?.user?.email}</p>
        <p className="text-2xl mt-3">Your role: {session?.user?.role}</p>
      </div>
    </div>
  );
}

export default Homepage;
