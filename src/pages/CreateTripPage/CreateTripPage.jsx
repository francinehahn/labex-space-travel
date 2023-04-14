import React, { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Header} from '../../components/Header/Header'
import {CreateTripSection, GoBack} from './style'
import { useForm } from "../../hooks/useForm"
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { urlBase } from "../../constants/urlBase"
import {Loading} from "../../components/Loading/Loading"
import planet from '../../img/planet.jpg'


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
            clear()
            alert('Sua viagem foi criada com sucesso!')
        }).catch(err => {
            setIsLoading(false)
            alert(`Houve um erro: ${err.response.data.message}`)
        })
    }

    return (
        <CreateTripSection background={planet}>
            <Header/>
            
            <h2>Criar Viagem</h2>
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
                    <option value={"Mercúrio"}>Mercúrio</option>
                    <option value={"Vênus"}>Vênus</option>
                    <option value={"Terra"}>Terra</option>
                    <option value={"Marte"}>Marte</option>
                    <option value={"Júpiter"}>Júpiter</option>
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
                    placeholder="Descrição"
                    name="description"
                    value={form.description}
                    onChange={onChange}
                    minLength={30}
                />
                <input
                    required
                    type="number"
                    placeholder="Duração em dias"
                    name="durationInDays"
                    value={form.durationInDays}
                    onChange={onChange}
                    min={50}
                />
                <button>{isLoading? <Loading size="small"/> : 'Criar'}</button>
            </form>

            <GoBack onClick={() => navigate(-1)}>Voltar</GoBack>
        </CreateTripSection>
    )
}