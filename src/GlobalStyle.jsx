import styled, { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }
`

export const GeneralContainer = styled.main `
    min-height: 100vh;

    button, select {
        cursor: pointer;
        font-size: 16px;
        :focus {
            outline: none;
        }
    }

    p, input, li, textarea {
        font-size: 16px;
        :focus {
            outline: none;
        }
    }

    h1 {
        @media screen and (min-width: 1200px) {
            font-size: 34px;
        }
        @media screen and (min-width: 450px) and (max-width: 1200px) {
            font-size: 28px;
        }
        @media screen and (max-width: 450px) {
            font-size: 24px;
        }
    }

    h2 {
        @media screen and (min-width: 1200px) {
            font-size: 28px;
        }
        @media screen and (min-width: 450px) and (max-width: 1200px) {
            font-size: 24px;
        }
        @media screen and (max-width: 450px) {
            font-size: 20px;
        }
    }

`