import React, {useContext} from "react"
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { useRequestData } from "../../../hooks/useRequestData";
import { urlBase } from "../../../constants/urlBase";
import {Header} from '../../Header/Header'
import {ApplicantsCard} from '../../ApplicantsCard/ApplicantsCard'
import {DetailsSection, PendingCandidates, ApprovedCandidates, Loading, GoBack} from './style'
import { AuthContext } from "../../../contexts/AuthContext";
import loading from '../../../img/loading.png'
import rocket from '../../../img/rocket.png'
import { ErrorPage } from "../ErrorPage/ErrorPage";



export function TripDetailsPage() {
    useProtectedPage()
    const {details} = useContext(AuthContext)
    const pathParams = useParams()
    const tripName = pathParams.details
    const navigate = useNavigate()


    //Request for travel details
    const [data, isLoading, error, updateData, setUpdateData] = useRequestData(`${urlBase}trip/${details}`, {
        headers: {
            auth: localStorage.getItem("token")
        }
    })


    //Candidate approval
    const handleApprove = (candidateId) => {
        const body = {
            approve: true
        }
        axios.put(`${urlBase}trips/${details}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            alert('Candidato aprovado!')
            setUpdateData(!updateData)
        }).catch((err) => alert(`Houve um erro: ${err}`))
    }
    

    //Candidate disapproval
    const handleDisapprove = (candidateId) => {
        const body = {
            approve: false
        }
        axios.put(`${urlBase}trips/${details}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            alert('Candidato reprovado!')
            setUpdateData(!updateData)
        }).catch((err) => alert(`Houve um erro: ${err}`))
    }

    return (
        <DetailsSection>
            <Header/>
            {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
            {!isLoading && data && (
            <>
                <section>
                    <section>
                        <h1>{tripName}</h1>
                        <p>DESCRIÇÃO: {data.trip.description}</p>
                        <p>PLANETA: {data.trip.planet}</p>
                        <p>DURAÇÃO: {data.trip.durationInDays} dias</p>
                        <p>DATA: {data.trip.date}</p>
                    </section>
                    
                    <PendingCandidates>
                        <h2>Candidatos pendentes</h2>
                        {data.trip.candidates && data.trip.candidates.map(item => {
                            return (
                                <ApplicantsCard
                                    key={item.id}
                                    name={item.name}
                                    profession={item.profession}
                                    age={item.age}
                                    country={item.country}
                                    text={item.applicationText}
                                    handleApprove={() => handleApprove(item.id)}
                                    handleDisapprove={() => handleDisapprove(item.id)}
                                />
                            )
                        })}
                        {data.trip.candidates.length === 0 && <p>Não há candidatos para essa viagem.</p>}
                    </PendingCandidates>
                    
                    <ApprovedCandidates>
                        <div>
                            <h2>Candidatos aprovados</h2>
                            <img src={rocket} alt={'Ícone de um foguete'}/>
                        </div>
                        
                        <ul>
                            {data.trip.approved && data.trip.approved.map(item => {
                                return <li key={item.id}>{item.name}</li>
                            })}
                            {data.trip.approved.length === 0 && <p>Não há candidatos aprovados.</p>}
                        </ul>
                    </ApprovedCandidates>

                    <GoBack onClick={() => navigate(-1)}>Voltar</GoBack>
                </section>
            </>
            )}
            {!isLoading && error && <ErrorPage error={error}/>}
        </DetailsSection>
    )
}