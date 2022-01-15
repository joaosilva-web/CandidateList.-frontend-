import styled from "styled-components";

interface IButtonProps {
    bg?: string;
    cololr?: string;
}

export const Cotntent = styled.div`
   position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PutForm = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: rgba( 30, 30, 30, 0.5 );
    backdrop-filter: blur( 8px );
    -webkit-backdrop-filter: blur( 8px );
    border-radius: 10px;
    padding: 28px;

    h1 {
        text-align: center;
        font-size: 48px;
    }

    label {
        padding: 8px;
    }

    input[type="text"], input[type="date"] {
        width: 400px;
    }

    .close {
            position: absolute;
            top: 10px;
            right: 10px;
        }
`

export const InputButton = styled.input<IButtonProps>`
        color: white;
        background: ${props => props.bg == 'normal'? '#5F5AA2' : 'transparent'};
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 10px;

`

export const Btn = styled.button<IButtonProps>`
        color: white;
        background: ${props => props.bg == 'normal'? '#5F5AA2' : 'transparent'};
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 0 10px;
        transition: .5s ease;

        &&:hover {
            color: ${props => props.color == 'danger'? '#E4572E' : 'white'};
        }

`