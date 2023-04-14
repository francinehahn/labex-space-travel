import styled from "styled-components";


export const CreateTripSection = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 100vh;

    h2 {
        text-align: center;
        color: white;
        margin: 4vh 2vh;
    }

    form {
        display: flex;
        flex-direction: column;
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

        select, input, textarea, button {
            border: 1px solid lightgrey;
            padding: 1.2vh .5vw;
        }

        button {
            cursor: pointer;
            :active {
                background-color: #e2e2e2;
            }
        }
    }
`


export const GoBack = styled.button `
    display: block;
    margin: 4vh auto 0 auto;
    background-color: transparent;
    border: 1px solid white;
    color: white;

    @media screen and (min-width: 1000px) {
        padding: .8% 2%;
    }
    @media screen and (min-width: 600px) and (max-width: 1000px) {
        padding: 1.5% 2.5%;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        padding: 2% 3%;
    }
    :hover {
        background-color: white;
        color: black;
    }
`