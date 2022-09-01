import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
`

export const GeneralContainer = styled.main `
    font-family: 'Roboto', sans-serif;
    min-height: 100vh;
    button, select {
        cursor: pointer;
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    p, input, li, textarea {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
    h1 {
        font-family: 'Roboto', sans-serif;
        @media screen and (min-width: 1200px) {
            font-size: 40px;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            font-size: 36px;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            font-size: 32px;
        }
        @media screen and (min-width: 450px) and (max-width: 800px) {
            font-size: 28px;
        }
        @media screen and (min-width: 320px) and (max-width: 450px) {
            font-size: 26px;
        }
    }
    h2 {
        font-family: 'Roboto', sans-serif;
        @media screen and (min-width: 1200px) {
            font-size: 32px;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            font-size: 28px;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            font-size: 24px;
        }
        @media screen and (min-width: 450px) and (max-width: 800px) {
            font-size: 22px;
        }
        @media screen and (min-width: 320px) and (max-width: 450px) {
            font-size: 20px;
        }
    }

`