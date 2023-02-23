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
        padding: 0 10vw;
    }
    .sidebar {
        flex: none;
        width: 300px;
        /* margin: 0px 30px 15px 24px; */
    }
    .hide {
        display: none;
    }
    .background_box {
        background: rgb(240, 242, 243);
    }
`

export default GlobalStyle