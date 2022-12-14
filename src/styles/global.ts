import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme.colors.white};
        font-family: ${(props) => props.theme.fontFamily};
        position: relative;
        min-height: 100vh;
        overflow-x: hidden;
    }

    .w3a-modal--light{ z-index: 10 !important; }
`
