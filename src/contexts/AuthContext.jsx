import React, { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

export function AuthContextProvider({children}) {
    const [login, setLogin] = useState()
    const token = localStorage.getItem("token")
    const [details, setDetails] = useState("")

    useEffect(() => {
        if (token===null) {
            setLogin(false)
        } else {
            setLogin(true)
        }
    }, [])

    return (
        <AuthContext.Provider value={{login, setLogin, details, setDetails}}>
            {children}
        </AuthContext.Provider>
    )
}