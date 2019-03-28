import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:var(--black);
    }
    *{
        box-sizing:border-box;
    }
    body{
    }
    :root {
    --light: #fff;
    --light2: #f4f4f4;
    --light3: #fffff3;
    --black: #566270;
    --grey: #e0e3da;
    --purple: #a593e0;
    --red: #e53a40;
    --yellow: #efdc05;
    --blue: #0077c8;
    --box-shadow: 9px 9px 16px -5px #757575;
    --taxt-shadow: 2px 2px 2px #969696;
    }

`;

export default globalStyles;
