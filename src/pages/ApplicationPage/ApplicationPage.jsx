import React, { useState } from "react"
import axios from 'axios'
import { useForm } from "../../hooks/useForm"
import { urlBase } from "../../constants/urlBase"
import {Header} from '../../components/Header/Header'
import {ApplicationSection} from './style'
import { useRequestData } from "../../hooks/useRequestData"
import moon from '../../img/moon.jpg'
import moonTablet from '../../img/moon-tablet.jpg'
import moonMobile from '../../img/moon-mobile.jpg'
import { countries } from "../../constants/countries"
import {Loading} from "../../components/Loading/Loading"


export function ApplicationPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange, clear] = useForm({name: "", age: "", text: "", profession: "", country: "", tripId: ""})
    const [data] = useRequestData(`${urlBase}trips`)
    const filterTrips = data && data.trips.filter(trip => {
        const date = new Date(trip.date.split("/").reverse().join(","))
        return date.valueOf() > new Date().valueOf()
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.text,
            profession: form.profession,
            country: form.country
        }

        axios.post(`${urlBase}trips/${form.tripId}/apply`, body).then(() => {
            setIsLoading(false)
            clear()
            alert("Sua inscrição foi concluída com sucesso!")
        }).catch(err => {
            setIsLoading(false)
            alert(`Ocorreu um erro: ${err.response.data.message}`)
        })
    }

    return (
        <ApplicationSection backgroundL={moon} backgroundM={moonTablet} backgroundS={moonMobile}>
            <Header/>
            
            <section>
                <h2>Inscreva-se para uma viagem</h2>

                <form onSubmit={handleSubmit}>
                    <select name="tripId" value={form.tripId} onChange={onChange} required>
                        <option>Escolha uma viagem</option>
                        {data && filterTrips.map(item => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })}
                    </select>

                    <input
                        required
                        type="text"
                        placeholder="Nome e sobrenome"
                        name="name"
                        value={form.name}
                        onChange={onChange}
                        pattern="^[a-zA-Z\u00C0-\u017F´]+\s+[a-zA-Z\u00C0-\u017F´]{3,}$"
                    />
                    <input
                        required
                        type="number"
                        placeholder="Idade"
                        name="age"
                        value={form.age}
                        onChange={onChange}
                        min={18}
                    />
                    <textarea
                        required
                        placeholder="Por que você é um(a) bom/boa candidato(a)?"
                        rows={5}
                        name="text"
                        value={form.text}
                        onChange={onChange}
                        minLength={30}
                    />
                    <input
                        required
                        type="text"
                        placeholder="Profissão"
                        name="profession"
                        value={form.profession}
                        onChange={onChange}
                        minLength={4}
                    />
                  
                    <select name="country" value={form.country} onChange={onChange} required>
                        <option>Selecione o país</option>
                        {countries.map((item, index) => {
                            return <option key={index} value={item}>{item}</option>
                        })}
                    </select>

                    <button>{isLoading? <Loading size="small"/> : 'Enviar'}</button>
                </form>
            </section>
        </ApplicationSection>
    )
}