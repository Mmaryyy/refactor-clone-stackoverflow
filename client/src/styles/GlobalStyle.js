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
        /* justify-content: space-between; */
        justify-content: center;
        background: none;
        max-width: 1264px;
        margin: 0 auto;
        /* padding: 0 10vw; */
    }
    .sidebar {
        margin-top: 20px;
        margin-left: 24px;
        flex: none;
        width: 300px;
        &.ver3 {
            margin-right: 24px;
            width: 360px;
        }
    }
    .hide {
        display: none;
    }
    .background_box {
        background: rgb(240, 242, 243);
    }
`

export default GlobalStyle