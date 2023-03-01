import styled from "styled-components";


export const Container = styled.section `
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    min-height: 130vh;
    padding-bottom: 4vh;
    h1 {
        text-align: center;
        color: white;
        @media screen and (min-width: 1000px) {
            margin-top: 2.5%;
        }
        @media screen and (min-width: 750px) and (max-width: 1000px) {
            margin-top: 5%;
        }
        @media screen and (min-width: 670px) and (max-width: 750px) {
            margin-top: 8%;
        }
        @media screen and (min-width: 500px) and (max-width: 670px) {
            margin-top: 4%;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            margin-top: 10%;
        }
    }
    ul {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: center;
        align-content: center;
        @media screen and (min-width: 1300px) {
            column-gap: 2%;
            row-gap: 5%;
            margin: 7% 5%;
        }
        @media screen and (min-width: 1100px) and (max-width: 1300px) {
            column-gap: 4%;
            row-gap: 3%;
            margin: 5% 5% 15% 5%;
        }
        @media screen and (min-width: 930px) and (max-width: 1100px) {
            column-gap: 4%;
            row-gap: 3%;
            margin: 15% 5% 15% 5%;
        }
        @media screen and (min-width: 700px) and (max-width: 930px) {
            column-gap: 4%;
            row-gap: 2%;
            margin: 15% 5% 15% 5%;
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            column-gap: 4%;
            row-gap: 1%;
            margin: 25% 5% 20% 5%;
        }
        @media screen and (min-width: 400px) and (max-width: 500px) {
            column-gap: 4%;
            row-gap: 1%;
            margin: 35% 5% 25% 5%;
        }
        @media screen and (min-width: 320px) and (max-width: 400px) {
            row-gap: 1%;
            margin: 40% 5% 30% 5%;
        }
        li {
            display: flex;
            flex-direction: column;
            background-color: #336a95;
            box-shadow: 3px 3px 3px #07070734;
            padding: 3vh 2vw;
            h2 {
                color: white;
                margin-bottom: 1.5vh;
            }
            h3 {
                color: white;
                margin-bottom: 1.5vh;
            }
            p {
                line-height: 3vh;
                color: white;
                margin-bottom: 1.5vh;
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