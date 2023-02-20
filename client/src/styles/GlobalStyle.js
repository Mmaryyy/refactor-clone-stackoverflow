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
        padding: 15px 15px 15px 0px;
        justify-content: center;
    }
    .sidebar {
        width: 300px;
        margin: 0px 0px 15px 24px;
    }
`

export default GlobalStyle