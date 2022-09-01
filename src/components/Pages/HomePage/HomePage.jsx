import React from "react";
import { useNavigate } from "react-router-dom";
import {Header} from '../../Header/Header'
import {BiggerContainer, HomeSection} from './style'
import launch from '../../../img/launch.jpg'
import {goToLogin, goToTripsList} from '../../../coordinators/Coordinators'


export function HomePage() {
    const navigate = useNavigate()

    return (
        <BiggerContainer background={launch}>
            <Header/>
            <HomeSection>
                <section>
                    <h2>FAZER LOGIN</h2>
                    <button onClick={() => goToLogin(navigate)}>Login</button>
                </section>
                <section>
                    <h2>LISTA DE VIAGENS</h2>
                    <button onClick={() => goToTripsList(navigate)}>Viagens</button>
                </section>
            </HomeSection>
        </BiggerContainer>
    )
}