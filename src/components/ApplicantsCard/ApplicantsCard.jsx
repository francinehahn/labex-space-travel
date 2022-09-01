import React from "react"
import {BiggerContainer} from './style'


export function ApplicantsCard(props) {
    
    return (
        <BiggerContainer>
            <ul>
                <li>NOME: {props.name}</li>
                <li>PROFISSÃO: {props.profession}</li>
                <li>IDADE: {props.age} anos</li>
                <li>PAÍS: {props.country}</li>
                <li>TEXTO DE CANDIDATURA: {props.text}</li>
            </ul>
            <section>
                <button onClick={props.handleApprove}>Aprovar</button>
                <button onClick={props.handleDisapprove}>Reprovar</button>
            </section>
        </BiggerContainer>
    )
}