import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    background-position: top;
    height: 100vh;
`


export const HomeSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 5%;
    section {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 2%;
        gap: 5%;
        @media screen and (min-width: 1400px) {
            width: 30%;
            :nth-child(1) {
                margin-top: 29%;
            }
        }
        @media screen and (min-width: 1100px) and (max-width: 1400px) {
            width: 35%;
            :nth-child(1) {
                margin-top: 35%;
            }
        }
        @media screen and (min-width: 950px) and (max-width: 1100px) {
            width: 40%;
            :nth-child(1) {
                margin-top: 40%;
            }
        }
        @media screen and (min-width: 700px) and (max-width: 950px) {
            width: 45%;
            :nth-child(1) {
                margin-top: 85%;
            }
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            width: 65%;
            :nth-child(1) {
                margin-top: 85%;
            }
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            width: 90%;
            :nth-child(1) {
                margin-top: 120%;
            }
        }
        h2 {
            color: white;
        }
        button {
            padding: 2% 7%;
            color: white;
            border: 1px solid white;
            background-color: transparent;
            :hover {
                background-color: white;
                color: black;
            }
        }
    }
`