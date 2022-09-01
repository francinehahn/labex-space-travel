import React from "react";
import { urlBase } from "../../../constants/urlBase";
import { Header } from "../../Header/Header";
import { Container, Loading } from "./style";
import {useRequestData} from '../../../hooks/useRequestData'
import launch2 from '../../../img/launch2.jpg'
import loading from '../../../img/loading.png'
import { ErrorPage } from "../ErrorPage/ErrorPage";


export function ListTripsPage() {
    
    const [data, isLoading, error] = useRequestData(`${urlBase}trips`)

    //Rendering the trips' list
    const renderTrips = data && data.trips && data.trips.map(item => {
        return (
            <li key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.planet}</h3>
                <p>{item.description}</p>
                <p>Duração: {item.durationInDays} dias</p>
                <p>Data de embarque: {item.date}</p>
            </li>
        )
    })

    return (
        <Container background={launch2}>
            <Header/>
            <h1>Lista de viagens</h1>
            {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}

            <ul>
                {!isLoading && data && renderTrips}
            </ul>

            {!isLoading && error && <ErrorPage error={error}/>}
        </Container>
    )
}