import styled from "styled-components";


export const BiggerContainer = styled.section `
    display: grid;
    grid-template-columns: 70% 30%;
    background-color: transparent;
    border: 1px solid white;
    box-shadow: 4px 4px 4px #0000001c;
    @media screen and (min-width: 1100px) {
        margin: 1% auto;
        width: 50%;
    }
    @media screen and (min-width: 600px) and (max-width: 1100px) {
        margin: 1% auto;
        width: 70%;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        margin: 1% 5%;
        width: 90%;
    }
    ul {
        list-style: none;
        li {
            color: white;
            margin: 1vh 2vw;
        }
    }
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 3vh;
        margin-right: 2vw;
        button {
            border: 1px solid white;
            background-color: transparent;
            padding: 1.5vh 1.5vw;
            color: white;
            :hover {
                background-color: white;
                color: black;
            }
        }
    }
`