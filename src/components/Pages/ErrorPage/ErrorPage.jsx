import React from 'react'
import { useNavigate } from "react-router-dom"
import {ErrorSection} from './style'


export function ErrorPage(props) {
    const navigate = useNavigate()

    return (
        <ErrorSection>
            <h1>Erro</h1>
            <p>{props.error}</p>
            <button onClick={() => navigate(-1)}>Voltar</button>
        </ErrorSection>
    )
}