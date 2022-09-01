import React, {useContext, useState} from "react";
import {HeaderSection, MenuMobile} from './style'
import {Link} from 'react-router-dom'
import logo from '../../img/labex.png'
import { AuthContext } from "../../contexts/AuthContext";



export function Header() {
    const {login, setLogin} = useContext(AuthContext)
    const [showMenu, setShowMenu] = useState(false)

    //Logout button
    const handleLogout = () => {
        setLogin(false)
        localStorage.clear()
    }


    //Navigation
    const nav = () => {
        return (
            <>
                <Link to="/">Home</Link>
                <Link to="/lista-de-viagens">Viagens</Link>
                <Link to="/agendar-viagem">Inscrever-se</Link>
                {login && <Link to="/admin">Perfil</Link>}
                {login? <Link to="/login" onClick={handleLogout}>Logout</Link> :
                <Link to="/login">Login</Link>}
            </>
        )
    }

    return (
        <HeaderSection>
            <img src={logo} alt={'Logo da Labex'}/>
            <nav>
                {nav()}
            </nav>
            <MenuMobile>
                <div onClick={() => setShowMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {showMenu && (
                    <section>
                        <div>
                            <button onClick={() => setShowMenu(false)}>X</button>
                        </div>
                        <nav>{nav()}</nav>
                    </section>
                )}
            </MenuMobile>
        </HeaderSection>
    )
}

