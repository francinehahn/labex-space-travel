import React from 'react'
import {Router} from './Router/Router'
import {GlobalStyle, GeneralContainer} from './GlobalStyle'
import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  
  //Logout when user closes the window
  window.onbeforeunload = function(){
    localStorage.clear()
  }

  return (
    <GeneralContainer>
      <GlobalStyle/>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </GeneralContainer>
  )
}

export default App
