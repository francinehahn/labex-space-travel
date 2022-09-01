import styled from "styled-components";


export const ApplicationSection = styled.section `
    @media screen and (min-width: 1280px) {
        background-image: url(${props => props.backgroundL});        
    }
    @media screen and (min-width: 900px) and (max-width: 1280px) {
        background-image: url(${props => props.backgroundM});        
    }
    @media screen and (min-width: 320px) and (max-width: 900px) {
        background-image: url(${props => props.backgroundS});        
    }

    background-size: cover;
    min-height: 100vh;
  
    section {
        display: block;
        margin: 0 auto;
        width: 100%;
        h1 {
            text-align: center;
            color: white;
            @media screen and (min-width: 1200px) {
                margin: 3% 0 2% 0;
            }
            @media screen and (min-width: 1000px) and (max-width: 1200px) {
                margin: 10% 0 2% 0;
            }
            @media screen and (min-width: 800px) and (max-width: 1000px) {
                margin: 15% 0 2% 0;
            }
            @media screen and (min-width: 320px) and (max-width: 800px) {
                margin: 10% 0 5% 0;
            }
        }
        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 auto;
            @media screen and (min-width: 1200px) {
                width: 35vw;
            }
            @media screen and (min-width: 900px) and (max-width: 1200px) {
                width: 50vw;
            }
            @media screen and (min-width: 500px) and (max-width: 900px) {
                width: 70vw;
            }
            @media screen and (min-width: 320px) and (max-width: 500px) {
                width: 80vw;
            }
            input, textarea {
                padding: 2%;
                border: 1px solid lightgrey;
                width: 95.5%;
                font-family: 'roboto';
                font-size: 16px;
            }
            select {
                color: grey;
            }
            select, button {
                padding: 2%;
                border: 1px solid lightgrey;
                width: 100%;
            }
            button {
                :active {
                    background-color: #ff6a00;
                    color: white;
                }
            }
        }
    }
`

export const Loading = styled.img `
    display: block;
    margin: 19.1vh auto;
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