import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
    }

    body {
        min-height: 100vh;

        ::-webkit-scrollbar {
            width: 12px;
            background-color: #434343;
        }
        ::-webkit-scrollbar-track {
            background: #434343;
            border-radius: 20px;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #757575;
            border-radius: 20px;
        }

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

        h2 {
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

        h3 {
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
    }
`