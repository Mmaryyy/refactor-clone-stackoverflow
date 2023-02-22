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
        justify-content: space-between;
        background: none;
    }
    .sidebar {
        flex: none;
        width: 300px;
        margin: 0px 30px 15px 24px;
    }
    .hide {
        display: none;
    }
`

export default GlobalStyle