import styled from "styled-components";
import { darken } from 'polished'

interface IButtonProps {
    bg: string;
}

export const Candidate = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #242325;
`

export const CandidateCard = styled.div`
color: white;
padding: 28px;
background: rgba( 30, 30, 30, 0.5 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
    h1 {
        font-size: 46px;
    }

`

export const Actions = styled.div`
    display: flex;
    justify-content: space-evenly;

`
export const Btn = styled.button<IButtonProps>`
        color: white;
        background: ${props => props.bg == 'normal'? '#5F5AA2' : '#E4572E'};
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-top: 16px;
        padding: 0 10px;
        transition: all 0.5s ease;

        &&:hover {
            ${props => props.bg == 'normal'? `background:${darken(1, '#5F5AA2')}` : `background:${darken(1, '#E4572E')}`}
            transform: scale(1.05);
        }
`

export const Error = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #242325;
color: white;

a{
    color: white;
    text-decoration: none;
    background-color: #5F5AA2;
    padding: 10px;
    margin-top: 10px;
}
`

export const HomeButton = styled.button`
    position: absolute;
    top: 0;
    left: 0;
    background-color: transparent;
    border: 0;
    color: white;
    padding: 10px;
    transition: all 0.5s ease;

    &&:hover {
        padding:10px 5px;
    }
`
