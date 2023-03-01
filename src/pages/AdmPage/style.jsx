import styled from "styled-components";


export const BiggerContainer = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 96vh;
    padding-bottom: 4vh;
`


export const AdminSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2vh;
    h1 {
        text-align: center;
        color: white;
        margin: 5vh 1vw 2vh 1vw;
    }
    button {
        padding: 1.5vh 2vw;
        margin: .5vh 0;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        :hover {
            background-color: white;
            color: black;
        }
    }
`


export const ListTripsSection = styled.section `
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vh;
    padding-right: 1vw;
    overflow-y: scroll;
    ::-webkit-scrollbar-track {
        background-color: white;
    }
    ::-webkit-scrollbar {
        width: .4vw;
        background: white;
    }
    ::-webkit-scrollbar-thumb {
        background: #9f9f9f;
    }
`

export const ButtonSection = styled.section `
    display: flex;
    gap: 1%;
    button {
        background-color: transparent;
        border: 1px solid white;
        padding: 1vh 1vw;
        color: white;
        :hover {
            background-color: white;
            color: black;
        }
        :nth-child(1) {
            @media screen and (min-width: 1350px) {
                width: 23vw;
            }
            @media screen and (min-width: 1000px) and (max-width: 1350px) {
                width: 32vw;
            }
            @media screen and (min-width: 830px) and (max-width: 1000px) {
                width: 40vw;
            }
            @media screen and (min-width: 720px) and (max-width: 830px) {
                width: 48vw;
            }
            @media screen and (min-width: 580px) and (max-width: 720px) {
                width: 58vw;
            }
            @media screen and (min-width: 470px) and (max-width: 580px) {
                width: 68vw;
            }
            @media screen and (min-width: 320px) and (max-width: 470px) {
                width: 74vw;
            }
        }
        :nth-child(2) {
            @media screen and (min-width: 1024px) {
                width: 4vw;
            }
            @media screen and (min-width: 720px) and (max-width: 1024px) {
                width: 5vw;
            }
            @media screen and (min-width: 560px) and (max-width: 720px) {
                width: 7vw;
            }
            @media screen and (min-width: 320px) and (max-width: 560px) {
                width: 9vw;
            }
        }
        img {
            width: 100%;
        }
    }
`


export const Loading = styled.img `
    display: block;
    margin: 12vh auto;
    @keyframes rotate {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    animation: rotate 1s infinite;
    @media screen and (min-width: 1000px) {
        width: 5%;
    }
    @media screen and (min-width: 320px) and (max-width: 1000px) {
        width: 15%;
    }
`