import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
       margin : 0;
       padding: 0;
       box-sizing: border-box;
       font-family: 'Roboto';
    }

    body {
        color: ${(props) => props.theme.textColor};
        background-color: ${(props) => props.theme.backgroundColor};
    }

    a {
        color: ${(props) => props.theme.textColor};
        text-decoration: none; 
    }

    a:hover {
        text-decoration: underline; 
    }

    /* button {
        background-color: ${(props) => props.theme.colorPrimary};
        padding: ${(props) => `${props.theme.paddingDefault}px`};
    } */
`;
