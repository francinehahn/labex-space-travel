import axios from "axios"
import { useState, useEffect } from "react"


export function useRequestData(url, headers) {
    
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [updateData, setUpdateData] = useState(false)

    useEffect(() => {
        axios.get(url, headers).then(
            response => {
                setIsLoading(false)
                setData(response.data)
            }
        ).catch(err => {
            setIsLoading(false)
            setError(err)
        })
    }, [url, updateData])
    
    return [data, isLoading, error, updateData, setUpdateData]
}