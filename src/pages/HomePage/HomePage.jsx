import React from "react"
import { useNavigate } from "react-router-dom"
import {Header} from '../../components/Header/Header'
import {BiggerContainer, HomeSection} from './style'
import launch from '../../images/launch.jpg'
import {goToLogin, goToTripsList} from '../../coordinators/Coordinators'


export function HomePage() {
    const navigate = useNavigate()

    return (
        <BiggerContainer background={launch}>
            <Header/>
            <HomeSection>
                <section>
                    <h3>FAZER LOGIN</h3>
                    <button onClick={() => goToLogin(navigate)}>Login</button>
                </section>
                <section>
                    <h3>LISTA DE VIAGENS</h3>
                    <button onClick={() => goToTripsList(navigate)}>Viagens</button>
                </section>
            </HomeSection>
        </BiggerContainer>
    )
}