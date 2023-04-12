import styled from "styled-components"

export const LoadingSection = styled.div `
    height: ${props => props.size === "small"? '15px' : '30px'};
    width: ${props => props.size === "small"? '15px' : '30px'};
    border-radius: 50%;
    border: ${props => props.size === "small"? '4px solid #373737' : '6px solid rgb(255, 255, 255)'};
    border-bottom: ${props => props.size === "small"? '4px solid transparent' : '6px solid transparent'};
    display: block;
    margin: ${props => props.size === "small"? '0vh auto' : '20vh auto'};
    
    @keyframes rotation {
        0% {rotate: 0}
        100% {rotate: 360deg}
    }
    
    animation: rotation ease-out 1.3s infinite;
`