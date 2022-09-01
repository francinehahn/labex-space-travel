import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AdmPage } from "../components/Pages/AdmPage/AdmPage";
import { CreateTripPage } from "../components/Pages/CreateTripPage/CreateTripPage";
import {HomePage} from '../components/Pages/HomePage/HomePage';
import { LoginPage } from "../components/Pages/LoginPage/LoginPage";
import { ApplicationPage } from "../components/Pages/ApplicationPage/ApplicationPage";
import { TripDetailsPage } from "../components/Pages/TripDetailsPage/TripDetailsPage";
import { ListTripsPage } from "../components/Pages/ListTripsPage/ListTripsPage";
import { ErrorPage } from "../components/Pages/ErrorPage/ErrorPage";


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
                <Route path="/erro" element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}