import styled from "styled-components";


export const DetailsSection = styled.section `
    background-color: black;
    background-size: contain;
    min-height: 100vh;
    section {
        padding: 4vh 0;
        section {
            h1 {
                text-align: center;
                margin-bottom: 2%;
                color: white;
            }
            p {
                color: white;
                text-align: center;
                margin: 1% 5%;
            }
        }
    }
`


export const PendingCandidates = styled.section `
    display: flex;
    flex-direction: column;
    gap: 2vh;
    justify-content: center;
    border-top: 1px solid white;    
    border-bottom: 1px solid white;
    @media screen and (min-width: 1000px) {
        margin: 0 15vw;
    }
    @media screen and (min-width: 600px) and (max-width: 1000px) {
        margin: 0 12vw;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        margin: 0 8vw;
    }
    h2 {
        color: white;
        text-align: center;
        @media screen and (min-width: 1200px) {
            margin-bottom: 1.5%;
        }
        @media screen and (min-width: 600px) and (max-width: 1200px) {
            margin-bottom: 1%;
        }
        @media screen and (min-width: 320px) and (max-width: 600px) {
            margin-bottom: 3%;
        }
    }
`


export const ApprovedCandidates = styled.section `
    div {
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 1vw;
        h2 {
            color: white;
            text-align: center;
            @media screen and (min-width: 600px) and (max-width: 1200px) {
                margin-bottom: 1%;
            }
            @media screen and (min-width: 320px) and (max-width: 600px) {
                margin-bottom: 3%;
            }
        }
        img {
            @media screen and (min-width: 1100px) {
                width: 3%;
            }
            @media screen and (min-width: 600px) and (max-width: 1100px) {
                width: 6%;
            }
            @media screen and (min-width: 320px) and (max-width: 600px) {
                width: 10%;
            }
            
            @keyframes rocketNotebook {
                0% {transform: translateY(4vh)}
                5% {transform: translateY(4.2vh)}
                10% {transform: translateY(4vh)}
                15% {transform: translateY(4.2vh)}
                20% {transform: translateY(4vh)}
                30% {transform: translateY(4.2vh)}
                40% {transform: translateY(4vh)}
                50% {transform: translateY(4.2vh)}
                100% {transform: translateY(0)}
            }
            animation: rocketNotebook 1.5s ease infinite;
        }
    }
    
    ul {
        margin: 2% 0;
        list-style: square;
        display: flex;
        flex-direction: column;
        align-items: center;
        li {
            color: white;
        }
    }
`

export const GoBack = styled.button `
    display: flex;
    margin: 0 auto;
    padding: 1.5vh 2vw;
    background-color: transparent;
    border: 1px solid white;
    color: white;
    :hover {
        background-color: white;
        color: black;
    }
`


export const Loading = styled.img `
    display: block;
    margin: 24vh auto;
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