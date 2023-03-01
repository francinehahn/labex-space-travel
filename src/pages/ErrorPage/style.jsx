import styled from "styled-components";


export const ErrorSection = styled.section `
    background-color: black;
    height: 100vh;
    padding: 20vh;
    h1, p {
        color: white;
        text-align: center;
    }
    button {
        background-color: transparent;
        border: 1px solid white;
        color: white;
        padding: 2vh 3vw;
        display: block;
        margin: 10vh auto 0 auto;
        :hover {
            background-color: white;
            color: black;
        }
    }
`