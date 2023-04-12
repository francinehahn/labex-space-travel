import React from 'react'
import {Router} from './router/Router'
import {GlobalStyle} from './GlobalStyle'
import { AuthContextProvider } from './contexts/AuthContext'


function App() {
  
  //Logout when user closes the window
  window.onbeforeunload = function(){
    localStorage.clear()
  }

  return (
    <>
      <GlobalStyle/>
      <AuthContextProvider>
        <Router/>
      </AuthContextProvider>
    </>
  )
}

export default App
