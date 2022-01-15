import styled from "styled-components";

export const SearchBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

button {
    color: white;
    border: 0;
    background: #5F5AA2;
    height: 45px;
}
`

export const Initial = styled.div`
background: #242325;
color: white;
font-size: 28px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;

    a {
        margin-top: 16px;
        color: white;
        text-decoration: none;
        transition: all 0.5s ease;

        &:hover {
            transform: scale(1.05);
        }
    }
`