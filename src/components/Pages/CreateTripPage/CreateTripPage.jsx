import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Header} from '../../Header/Header'
import {CreateTripSection, GoBack, Loading} from './style'
import { useForm } from "../../../hooks/useForm";
import planet from '../../../img/planet.png'
import { useProtectedPage } from "../../../hooks/useProtectedPage";
import { urlBase } from "../../../constants/urlBase";
import loading from '../../../img/loading.png'


export function CreateTripPage() {
    useProtectedPage()
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({id: "", name: "", planet: "", 	date: "", description: "", durationInDays: ""})
    const navigate = useNavigate()
    
    //Getting the updated date
    const getDate = () => {
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed).toLocaleDateString()
        const date = today.split("/")
        
        let day = parseInt(date[0])
        
        let month = date[1]
        const year = date[2]

        if (month === '02') {
            day < 28? day += 1 : day += 0
        } else if (month === '01' || month === '03' || month === '05' || month === '07' || month === '08' || month === '10' || month === '12') {
            day < 31? day += 1 : day += 0   
        } else {
            day < 30? day += 1 : day += 0
        }

        if(day < 10) {
            day = `0${day}`
        }

        return `${year}-${month}-${day}`
    }
    

    //When the user clicks on the button to create a trip
    const handleCreateTrip = (e) => {
        e.preventDefault()
        setIsLoading(true)

        const date = form.date.split("-")
        const formattedDate = `${date[2]}/${date[1]}/${date[0]}`
        
        const body = {
            "name": form.name,
            "planet": form.planet,
            "date": formattedDate,
            "description": form.description,
            "durationInDays": form.durationInDays
        }
        
        axios.post(`${urlBase}trips`, body, {
            headers: {
                auth: localStorage.getItem("token")
            }
        }).then(() => {
            setIsLoading(false)
            alert('Sua viagem foi criada com sucesso!')
        }).catch(err => {
            setIsLoading(false)
            alert(`Houve um erro: ${err}`)
        })
        
        clear()
    }


    return (
        <CreateTripSection background={planet}>
            <Header/>
            <h1>Criar Viagem</h1>
            <form onSubmit={handleCreateTrip}>
                <input
                    required
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    minLength={5}
                />
                <select name="planet" value={form.planet} onChange={onChange} required>
                    <option>Escolha um planeta</option>
                    <option value={"Merc??rio"}>Merc??rio</option>
                    <option value={"V??nus"}>V??nus</option>
                    <option value={"Terra"}>Terra</option>
                    <option value={"Marte"}>Marte</option>
                    <option value={"J??piter"}>J??piter</option>
                    <option value={"Saturno"}>Saturno</option>
                    <option value={"Urano"}>Urano</option>
                    <option value={"Netuno"}>Netuno</option>
                </select>
                <input
                    required
                    type="date"
                    placeholder="Data"
                    name="date"
                    value={form.date}
                    onChange={onChange}
                    min={getDate()}
                />
                <textarea
                    required
                    rows={5}
                    placeholder="Descri????o"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    minLength={30}
                />
                <input
                    required
                    type="number"
                    placeholder="Dura????o em dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    min={50}
                />
                <input type="submit" value={'Criar'}/>
            </form>

            {isLoading && <Loading src={loading} alt={'??cone de um c??rculo rodando'}/>}
            <GoBack onClick={() => navigate(-1)}>Voltar</GoBack>
        </CreateTripSection>
    )
}