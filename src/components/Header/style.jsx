import styled from "styled-components";


export const HeaderSection = styled.header `
    background-color: transparent;
    height: 10vh;
    padding: 1% 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        @media screen and (min-width: 1200px) {
            width: 8%;
        }
        @media screen and (min-width: 900px) and (max-width: 1200px) {
            width: 10%;
        }
        @media screen and (min-width: 700px) and (max-width: 900px) {
            width: 12%;
        }
        @media screen and (min-width: 500px) and (max-width: 700px) {
            width: 18%;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            width: 28%;
        }
    }
    nav {
        @media screen and (min-width: 640px) {
            display: flex;
            gap: 5vw;
            a {
                color: white;
                :hover {
                    color: lightgray;
                }
            }
        }
        @media screen and (min-width: 320px) and (max-width: 640px) {
            display: none;
        }
    }
`


export const MenuMobile = styled.div `
    @media screen and (min-width: 640px) {
        display: none;
    }
    @media screen and (min-width: 320px) and (max-width: 640px) {
        width: 40px;
        height: 30px;
        margin-right: 20px;
        div {
            div {
                background-color: white;
                height: 5px;
                width: 100%;
                margin: 6px auto;
            }
        }
        section {
            position: absolute;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background-color: black;
            padding-top: 5vh;
            nav {
                text-align: center;
                margin-top: 5vh;
                display: flex;
                flex-direction: column;
                gap: 3vh;
                a {
                    color: white;
                    text-decoration: none;
                    font-size: 1.4em;
                }
            }
            div {
                display: flex;
                justify-content: flex-end;
                margin-right: 11vw;
                margin-top: -1.2vh;
                button {
                    padding: 1vh 2.5vw;
                }
            }
        }
    }
`