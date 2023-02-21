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
        padding-right: 15px;
        justify-content: center;
        background: none;
    }
    .sidebar {
        width: 300px;
        margin: 0px 0px 15px 24px;
    }
    .hide {
        display: none;
    }
`

export default GlobalStyle