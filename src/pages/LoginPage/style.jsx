import styled from "styled-components"


export const LoginSection = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 100vh;
    background-color: black;

    @keyframes starsAnimation {
        0% {background-size: 85%;}
        50% {background-size: 90%;}
        100% {background-size: 85%;}
    }
    animation: starsAnimation 20s ease infinite;
`

export const FormSection = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 7vh auto 0 auto;
    background-color: #f5f5f5;
    border-radius: 5px;

    @media screen and (min-width: 1200px) {
        padding: 10vh 3vw;
        width: 18vw;
    }
    @media screen and (min-width: 900px) and (max-width: 1200px) {
        padding: 10vh 3vw;
        width: 25vw;
    }
    @media screen and (min-width: 700px) and (max-width: 900px) {
        padding: 10vh 5vw;
        width: 40vw;
    }
    @media screen and (min-width: 500px) and (max-width: 700px) {
        padding: 10vh 5vw;
        width: 50vw;
    }
    @media screen and (max-width: 500px) {
        padding: 6vh 8vw;
        width: 70vw;
    }

    img {
        width: 30%;
        margin-bottom: 6vh;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        margin: 3vh 0;
        width: 100%;

        input {
            padding: 1.2vh .5vw;
            background-color: transparent;
            border: 1px solid grey;
            width: 100%;
        }

        button {
            padding: 1.2vh 0;
            background-color: transparent;
            border: 1px solid grey;
            width: 106%;
            :hover {
                background-color: #e9e9e9;
            }
            @media screen and (min-width: 1200px) and (max-width: 1400px) {
                width: 105%;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px) {
                width: 104%;
            }
            @media screen and (min-width: 600px) and (max-width: 900px) {
                width: 103%;
            }
            @media screen and (max-width: 600px) {
                width: 102%;
            }
        }
    }
`