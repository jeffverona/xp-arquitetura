import { css } from 'styled-components';

const reset = css`
    html {
        font-family: arial, sans-serif;
        box-sizing: border-box;
        /* Nicer looking fonts for OS X and iOS */
        -webkit-font-smoothing: antialiased;
    }

    * {
        user-select: none;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
        -webkit-tap-highlight-color: transparent;
        box-sizing: inherit;
    }

    *:before,
    *:after {
        box-sizing: inherit;
    }

    input[type],
    [contenteditable] {
        user-select: text;
    }

    base,
    basefont,
    datalist,
    head,
    meta,
    script,
    style,
    title,
    noembed,
    param,
    template {
        display: none;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    b {
        font-weight: 400;
    }

    em,
    i {
        font-style: normal;
    }

    a:focus,
    button:focus {
        outline: 0;
    }

    button {
        appearance: none;
        border: 0;
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
    }

    textarea,
    input,
    fieldset {
        appearance: none;
        padding: 0;
        margin: 0;
        min-width: 0;
        font-size: 1rem;
        font-family: inherit;
        width: 100%;
        margin-bottom: 1rem;
    }

    input::-ms-clear {
        display: none;
    }

    input:focus {
        outline: 0;
    }

    input[type='number'] {
        -moz-appearance: textfield;
    }

    input[type='number']::-webkit-inner-spin-button,
    input[type='number']::-webkit-outer-spin-button {
        appearance: none;
    }

    svg {
        display: block;
    }

    img {
        max-width: 100%;
        display: block;
    }

    select:-moz-focusring {
        color: transparent;
        text-shadow: 0 0 0 #000;
    }

    body {
        box-sizing: border-box;
    }
`;

export default reset;
