import React from "react"
import { urlBase } from "../../constants/urlBase"
import { Header } from "../../components/Header/Header"
import { Container } from "./style"
import {useRequestData} from '../../hooks/useRequestData'
import launch2 from '../../img/launch2.jpg'
import { Loading } from "../../components/Loading/Loading"


export function ListTripsPage() {
    
    const [data, isLoading, error] = useRequestData(`${urlBase}trips`)
    const filterTrips = data && data.trips.filter(trip => {
        const date = new Date(trip.date.split("/").reverse().join(","))
        return date.valueOf() > new Date().valueOf()
    })
    
    //Rendering the trips' list
    const renderTrips = data && filterTrips.map(item => {
        return (
            <div key={item.id}>
                <h3>{item.name}</h3>
                <h4>{item.planet}</h4>
                <p>{item.description}</p>
                <p>Duração: {item.durationInDays} dias</p>
                <p>Data de embarque: {item.date}</p>
            </div>
        )
    })

    return (
        <Container background={launch2}>
            <Header/>
            <h2>Lista de viagens</h2>
            {isLoading && <Loading size="large"/>}

            <ul>
                {!isLoading && data && renderTrips}
            </ul>

            {!isLoading && error && <span>{error}</span>}
        </Container>
    )
}