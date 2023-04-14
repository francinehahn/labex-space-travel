import styled from "styled-components"


export const ApplicationSection = styled.section `
    background-color: black;
    
    @media screen and (min-width: 1280px) {
        background-image: url(${props => props.backgroundL});        
    }
    @media screen and (min-width: 900px) and (max-width: 1280px) {
        background-image: url(${props => props.backgroundM});        
    }
    @media screen and (min-width: 320px) and (max-width: 900px) {
        background-image: url(${props => props.backgroundS});        
    }

    background-size: cover;
    min-height: 100vh;
  
    section {
        display: flex;
        flex-direction: column;

        h2 {
            text-align: center;
            color: white;
            margin: 5vh;
        }

        form {
            border: 3px solid white;
            background-color: white;
            margin: 0 auto;

            @media screen and (min-width: 1200px) {
                width: 34vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px) {
                width: 49vw;
            }
            @media screen and (min-width: 500px) and (max-width: 900px) {
                width: 69vw;
            }
            @media screen and (max-width: 500px) {
                width: 79vw;
            }

            input, textarea {
                width: 97%;
            }

            select, button {
                width: 100%;
            }

            input, textarea, select, button {
                padding: 1vh .5vw;
                border: 1px solid lightgrey;
            }

            select {
                color: grey;
            }

            button {
                border: none;
                :active {
                    background-color: #e2e2e2;
                }
            }
        }
    }
`