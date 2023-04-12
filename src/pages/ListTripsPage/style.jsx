import styled from "styled-components"


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
        margin: 5vh 0 7vh 0;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: center;
        align-content: center;
        column-gap: 2vw;
        row-gap: 4vh;
        margin: 0 4vw;
        
        li {
            display: flex;
            flex-direction: column;
            background-color: #336a95;
            box-shadow: 3px 3px 3px #07070734;
            padding: 4vh 2vw;

            h2, h3, p {
                color: white;
                margin-bottom: 1.5vh;
            }

            p {
                line-height: 3vh;
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
        width: 4%;
    }
    @media screen and (min-width: 320px) and (max-width: 1000px) {
        width: 14%;
    }
`