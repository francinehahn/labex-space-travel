import React, {useContext} from "react"
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { useRequestData } from "../../hooks/useRequestData"
import { urlBase } from "../../constants/urlBase"
import { Header } from "../../components/Header/Header"
import {ApplicantsCard} from '../../components/ApplicantsCard/ApplicantsCard'
import { AuthContext } from "../../contexts/AuthContext"
import rocket from '../../img/rocket.png'
import { Loading } from "../../components/Loading/Loading"
import { ApprovedCandidates, DetailsSection, GoBack, PendingCandidates } from "./style"


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
    const handleApproval = (candidateId, approval) => {
        const body = {
            approve: approval? true : false
        }
        axios.put(`${urlBase}trips/${details}/candidates/${candidateId}/decide`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            setUpdateData(!updateData)
            approval? alert('Candidato aprovado!') : alert('Candidato reprovado!')
        }).catch((err) => alert(`Houve um erro: ${err}`))
    }

    return (
        <DetailsSection>
            <Header/>

            {isLoading && <Loading size="large"/>}

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
                                    handleApprove={() => handleApproval(item.id, true)}
                                    handleDisapprove={() => handleApproval(item.id, false)}
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

            {!isLoading && error && <span>{error}</span>}
        </DetailsSection>
    )
}