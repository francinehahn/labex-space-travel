import styled from "styled-components"


export const DetailsSection = styled.section `
    background-color: black;
    background-size: contain;
    min-height: 100vh;
    
    section {
        padding: 3vh 5vw 5vh 5vw;
        display: flex;
        flex-direction: column;
        gap: 4vh;

        #tripInfo {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1vh;
            color: white;

            h2 {
                margin-bottom: 2vh;
                color: white;
                text-align: center;
            }

            p {
                text-align: center;
                line-height: 3.5vh;
                @media screen and (min-width: 1000px) {
                    margin: 0 30vw;
                }
                @media screen and (min-width: 600) and (max-width: 1000px) {
                    margin: 0 10vw;
                }
            }
        }

        #pendingCandidates {
            display: flex;
            flex-direction: column;
            gap: 2vh;
            align-items: center;
            border-top: 1px solid white;    
            border-bottom: 1px solid white;
            padding: 6vh 0;

            h3 {
                color: white;
                margin-bottom: 2vh;
            }

            p {
                color: white;
            }
        }

        #approvedCandidates {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2vh;
            
            div {
                display: flex;
                align-items: baseline;
                justify-content: center;
                gap: 1vw;

                h3 {
                    color: white;
                    text-align: center;
                    margin: 4vh;
                }

                img {
                    @media screen and (min-width: 1100px) {
                        width: 5%;
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
                list-style: square;
                li {
                    color: white;
                    line-height: 4vh;
                }
            }

            p {
                color: white;
                margin-bottom: 2vh;
                text-align: center;
            }
        }
    }

    span {
        color: red;
        font-size: 16px;
        text-align: center;
    }
`

export const GoBack = styled.button `
    display: flex;
    margin: 0 auto 3vh auto;
    padding: 1.5vh 2vw;
    background-color: transparent;
    border: 1px solid white;
    color: white;

    :hover {
        background-color: white;
        color: black;
    }
`