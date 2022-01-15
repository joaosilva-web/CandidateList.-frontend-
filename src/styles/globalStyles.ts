import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}
body {
    width: 100%;
    height: 100%;
}
body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}
h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}
button, input[type="submit"] {
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover {
        transform: scale(1.05);
    }
}

input, button {
    height: 45px;
    font-size: 26px;
    outline: 0;
    border: 0;
}

input {
    padding: 10px;
}

[disabled] {
    opacity: .6;
    cursor: not-allowed;
}
`