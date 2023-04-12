import React, {useContext, useState} from "react"
import axios from "axios"
import { useForm } from "../../hooks/useForm"
import {urlBase} from '../../constants/urlBase'
import {Header} from '../../components/Header/Header'
import {useNavigate} from 'react-router-dom'
import {LoginSection, FormSection, Loading} from './style'
import stars from '../../img/stars.png'
import user from '../../img/user.png'
import { AuthContext } from "../../contexts/AuthContext"
import loading from '../../img/loading.png'
import {goToAdmin} from '../../coordinators/Coordinators'


export function LoginPage() {
    const {setLogin} = useContext(AuthContext)
    const [isLoading, setIsLoading] = useState(false)
    const [form, onChange] = useForm({email: "", password: ""})    
    const navigate = useNavigate()

    //When the user clicks on the login button
    const handleLogin = (e) => {
        e.preventDefault()
        setIsLoading(true)

        axios.post(`${urlBase}login`, form).then(response => {
            setIsLoading(false)
            localStorage.setItem("token", response.data.token)
            setLogin(true)
            goToAdmin(navigate)
        }).catch(err => {
            setIsLoading(false)
            alert(`Houve um erro: ${err}`)
        })
    }

    return (
        <LoginSection background={stars}>
            <Header/>
            {!isLoading && (
                <FormSection>
                    <img src={user} alt={'Imagem de um usuário'}/>
                    <form onSubmit={handleLogin}>
                        <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            placeholder={'Usuário'}
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                            onChange={onChange}
                        />
                        <input
                            required
                            type="password"
                            name="password"
                            value={form.password}
                            placeholder={'Senha'}
                            onChange={onChange}
                        />
                        <button>Entrar</button>
                    </form>
                </FormSection>
            )}
            
            {isLoading && <Loading src={loading} alt={'Ícone de um círculo rodando'}/>}
        </LoginSection>
    )
}