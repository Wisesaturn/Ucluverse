import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
${({ theme }) => css`
  /* 초기값 */
  * {
    margin: 0;
    padding: 0;
    letter-spacing: 0.04rem;
    border-radius: 5px;
  }

  body {
    overflow-x: hidden;
    max-width: 100vw;
  }

  :root {
    background: ${(props) => props.theme.background.default};

    /* Colors: */
    --accent1-l1: #694be6;
    --accent1-0: #5020dc;
    --grey2-1: #fffdf9;
    --grey1-1: #f7f4fb;
    --grey1-2: #ede9f0;
    --grey1-3: #dddae0;
    --grey1-4: #c4c1c7;
    --grey1-5: #a3a1a6;
    --grey1-6: #717073;
    --grey1-7: #4b4a4d;
    --grey1-8: #323233;
    --grey1-9: #0d0c0d;
    --accent2-l1: #ffb925;
    --accent2-0: #703f00;
    --paragraph-0: #a19279;
    --font-cancel-grey2-4: #a6a096;
    --font-sub-grey2-5: #736f68;
    --grey2-7: #3f3f3e;
    --font-black-grey2-8: #1a1917;
    --grey2-8: #1a1917;
    --good-0: #32b178;
    --good-l1: #63c599;
    --bad-l1: #e86c6c;
    --bad-0: #d93838;
    --third-0: #ffd9d9;
    --secondary-d1-font-title-: #513c0e;
    --secondary-d1: #513c0e;
    --secondary-0: #846116;
    --secondary-l1: #bf8f27;
    --secondary-l2: #ffeabf;
    --secondary-l3: #ffe3a8;
    --primary-d2: #1c072c;
    --primary-d1: #6d00b9;
    --primary-0: #9239df;
    --primary-l1: #a45de2;
    --gradient-link-0: #a27bc4;
    --shadow-purple-0: rgba(113, 34, 168, 0.16);

    /* Login button */
    --shadow-color: 208deg 10% 68%;
    --shadow-elevation-low: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
      1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
    --shadow-elevation-medium: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
      0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
      2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
      5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
    --shadow-elevation-high: 0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
      1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
      2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
      4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
      7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
      11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
      17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
      25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);
  }

  /* lottie default */
  .lottie {
    display: none;
    @media (min-width: 1024px) {
      position: absolute;
      display: block;
    }
  }

  /* font style */
  h1 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.05rem;
    color: var(--font-black-grey2-8);
  }

  h2 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.075rem;
    color: var(--font-black-grey2-8);
  }

  h3 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: -0.075rem;
    color: var(--font-black-grey2-8);
  }

  h4 {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.04rem;
    color: var(--font-black-grey2-8);
  }

  p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.04rem;
    color: var(--font-black-grey2-8);
  }

  /* Reset Style */
  .nonStyledLink {
    a {
      text-decoration: none;
    }
    overflow: hidden;
  }

  .transparent {
    background-color: transparent !important;
  }
`}
`;
