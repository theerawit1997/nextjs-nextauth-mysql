"use client"

import { SessionProvider } from "next-auth/react"

export const AuthenticationProvider = ({ children }) => {
    return <SessionProvider>{ children }</SessionProvider>
}