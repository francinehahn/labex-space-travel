import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AdmPage } from "../pages/AdmPage/AdmPage"
import { CreateTripPage } from "../pages/CreateTripPage/CreateTripPage"
import {HomePage} from '../pages/HomePage/HomePage'
import { LoginPage } from "../pages/LoginPage/LoginPage"
import { ApplicationPage } from "../pages/ApplicationPage/ApplicationPage"
import { TripDetailsPage } from "../pages/TripDetailsPage/TripDetailsPage"
import { ListTripsPage } from "../pages/ListTripsPage/ListTripsPage"


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="/agendar-viagem" element={<ApplicationPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/admin" element={<AdmPage/>}/>
                <Route path="/criar-viagem" element={<CreateTripPage/>}/>
                <Route path="/lista-de-viagens" element={<ListTripsPage/>}/>
                <Route path="/detalhes-da-viagem/:details" element={<TripDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}