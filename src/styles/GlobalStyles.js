import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

      :root{
        --font-family: 'Inter', sans-serif;

        --color-primary: #27AE60;
        --color-primary-50: #93D7AF;
        --color-secondary: #EB5757;

        --grey-100: #333333;
        --grey-50: #828282;
        --grey-20: #E0E0E0;
        --grey-0: #F5F5F5;

        --white-0: #FFFFFF;

        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

        --font-size-1: 1.625rem; /*26px*/
        --font-size-2: 1.375rem; /*22px*/
        --font-size-3: 1.125rem; /*18px*/
        --font-size-4: 1rem; /*16px*/
        --font-size-5: 0.875rem; /*14px*/
        --font-size-6: 0.75rem; /*12px*/

        --radius-8: 8px;
        --radius-5: 5px;
      }

      button{
        cursor: pointer;
      }
    `;
