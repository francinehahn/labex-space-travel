import React, {useContext, useState} from "react"
import axios from "axios"
import {useNavigate} from 'react-router-dom'
import {Header} from '../../components/Header/Header'
import {BiggerContainer, AdminSection, ListTripsSection, ButtonSection} from './style'
import planet from '../../img/planet.png'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { urlBase } from "../../constants/urlBase"
import { useRequestData } from "../../hooks/useRequestData"
import { Loading } from "../../components/Loading/Loading"
import iconDelete from '../../img/iconDelete.png'
import { AuthContext } from "../../contexts/AuthContext"
import {goToTripDetails, goToCreateTrip} from '../../coordinators/Coordinators'


export function AdmPage() {
    useProtectedPage()

    const [loadingData, setLoadingData] = useState(false)
    const navigate = useNavigate()
    const [data, isLoading, error, updateData, setUpdateData] = useRequestData(`${urlBase}trips`)
    const {setDetails} = useContext(AuthContext)
    
    //Getting the id of the trip
    const handleTripDetail = (item) => {
        setDetails(item.id)
        goToTripDetails(navigate, item.name)
    }

    //Removing the trip
    const handleRemoveTrip = (item) => {
        setLoadingData(true)
        const confirmation = confirm('Tem certeza que deseja remover essa viagem?')

        if (confirmation) {
            axios.delete(`${urlBase}trips/${item.id}`, {
                headers: {
                    auth: localStorage.getItem("token")
                }
            }).then(() => {
                setLoadingData(false)
                alert('Viagem excluída com sucesso!')
                setUpdateData(!updateData)
            }).catch(err => {
                setloadingData(false)
                alert(`Houve um erro: ${err.response.data.message}`)
            })
        } else {
            setLoadingData(false)
        }
    }
    
    //Rendering the trips' list
    const renderTrips = data && data.trips && data.trips.map(item => {
        return (
            <ButtonSection key={item.id}>
                <button onClick={() => handleTripDetail(item)}>{item.name}</button>
                <button onClick={() => handleRemoveTrip(item)}>
                    <img src={iconDelete} alt={'ícone de um lixo'}/>
                </button>
            </ButtonSection>
        )
    })

    return (
        <BiggerContainer background={planet}>
            <Header/>

            <AdminSection>
                <h1>Painel administrativo</h1>
                <button onClick={() => goToCreateTrip(navigate)}>Criar viagem</button>
                {isLoading && <Loading size="large"/>}
                
                {!isLoading && data && (
                    <ListTripsSection>
                        {data && data.trips && renderTrips}
                        {loadingData && <Loading size="large"/>}
                    </ListTripsSection>
                )}

                {!isLoading && error && <span>{error}</span>}
            </AdminSection>
        </BiggerContainer>
    )
}