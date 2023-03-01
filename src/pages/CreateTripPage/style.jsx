import styled from "styled-components";


export const CreateTripSection = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 100vh;
    h1 {
        text-align: center;
        color: white;
        @media screen and (min-width: 1200px) {
            margin: 3% 0 2% 0;
        }
        @media screen and (min-width: 550px) and (max-width: 1200px) {
            margin: 8% 0 3% 0;
        }
        @media screen and (min-width: 320px) and (max-width: 550px) {
            margin: 8% 0 4% 0;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        select, input:nth-child(6) {
            border: 1px solid lightgrey;
            margin: 0 auto;
            @media screen and (min-width: 1000px) {
                width: 35.1%;
                padding: .7%;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 55.2%;
                padding: .7%;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 70.2%;
                padding: 1%;
            }
            @media screen and (min-width: 320px) and (max-width: 600px) {
                width: 90.4%;
                padding: 1.5%;
            }
        }
        input, textarea {
            border: 1px solid lightgrey;
            margin: 0 auto;
            @media screen and (min-width: 1350px) {
                width: 33.6%;
                padding: .7%;
            }
            @media screen and (min-width: 1000px) and (max-width: 1350px) {
                width: 33.5%;
                padding: .7%;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                width: 53.6%;
                padding: .7%;
            }
            @media screen and (min-width: 600px) and (max-width: 800px) {
                width: 67.9%;
                padding: 1%;
            }
            @media screen and (min-width: 500px) and (max-width: 600px) {
                width: 87.1%;
                padding: 1.5%;
            }
            @media screen and (min-width: 320px) and (max-width: 500px) {
                width: 86.7%;
                padding: 1.5%;
            }
        }
        input {
            :nth-child(6) {
                cursor: pointer;
                :active {
                    background-color: #ff6a00;
                    color: white;
                    border: 1px solid #ff6a00;
                }
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

export const Loading = styled.img `
    display: block;
    margin: 5vh auto;
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