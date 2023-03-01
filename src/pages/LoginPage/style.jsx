import styled from "styled-components";


export const LoginSection = styled.section `
    background-image: url(${props => props.background});
    background-size: cover;
    height: 100vh;

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
    padding: 11vh 4vw;
    border-radius: 5px;
    @media screen and (min-width: 1200px) {
        width: 18vw;
    }
    @media screen and (min-width: 900px) and (max-width: 1200px) {
        width: 25vw;
    }
    @media screen and (min-width: 700px) and (max-width: 900px) {
        width: 40vw;
    }
    @media screen and (min-width: 500px) and (max-width: 700px) {
        width: 50vw;
    }
    @media screen and (min-width: 320px) and (max-width: 500px) {
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
        @media screen and (min-width: 900px) {
            width: 100%;
        }
        @media screen and (min-width: 320px) and (max-width: 900px) {
            width: 90%;
        }
        input {
            padding: 1.2vh .5vw;
            width: 100%;
            background-color: transparent;
            border: 1px solid grey;
        }
        button {
            padding: 1.2vh 0;
            background-color: transparent;
            border: 1px solid grey;
            @media screen and (min-width: 1200px) {
                width: 107%;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px) {
                width: 105%;
            }
            @media screen and (min-width: 320px) and (max-width: 900px) {
                width: 104%;
            }
            :hover {
                background-color: white;
            }
        }
    }
`


export const Loading = styled.img `
    display: block;
    margin: 27vh auto;
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