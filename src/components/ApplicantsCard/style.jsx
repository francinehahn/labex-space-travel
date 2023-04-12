import styled from "styled-components";


export const BiggerContainer = styled.div `
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 2vw;
    background-color: transparent;
    border: 1px solid white;
    padding: 3vh 2.5vw;
    margin: 0 auto;

    @media screen and (min-width: 1100px) {
        width: 50%;
    }
    @media screen and (min-width: 600px) and (max-width: 1100px) {
        width: 70%;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        width: 90%;
    }

    ul {
        list-style: none;
        li {
            color: white;
            line-height: 4vh;
        }
    }

    div {
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