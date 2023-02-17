import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ol,ul {
        list-style: none;
    }
    .app_wrap {
        display: flex;
        padding: 15px;
    }
`

export default GlobalStyle