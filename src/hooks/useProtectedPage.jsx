import { useEffect } from "react"
import { useNavigate } from "react-router"


export function useProtectedPage() {
    const navigate = useNavigate()
    
    useEffect(() => {
        const token = localStorage.getItem("token")
        token === null && navigate("/login") 
    }, [])
}