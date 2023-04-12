import styled from "styled-components"

export const LoadingSection = styled.div `
    height: 35px;
    width: 35px;
    border-radius: 50%;
    border: 6px solid rgb(255, 255, 255);
    border-bottom: 6px solid transparent;
    display: block;
    margin: ${props => props.size === "small"? '.5vh auto' : '15vh auto'};
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1s infinite;
`