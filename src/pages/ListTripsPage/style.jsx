import styled from "styled-components"


export const Container = styled.section `
    background-image: url(${props => props.background});
    background-position: center;
    background-size: cover;
    background-repeat: repeat;
    min-height: 130vh;
    padding-bottom: 4vh;

    h2 {
        text-align: center;
        color: white;
        margin: 5vh 0 7vh 0;
    }

    span {
        color: red;
        font-size: 16px;
    }

    ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        justify-content: center;
        align-content: center;
        column-gap: 2vw;
        row-gap: 4vh;
        margin: 0 4vw;
        
        div {
            display: flex;
            flex-direction: column;
            background-color: #336a95e1;
            box-shadow: 4px 4px 4px #0707072b;
            padding: 4vh 2vw;

            h3, h4, p {
                color: white;
                margin-bottom: 1.5vh;
            }

            p {
                line-height: 3vh;
            }
        }
    }
`