import { css } from '@emotion/react';

export const globalStyles = css`
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
    background-color: #1a1a1a;
    color: white;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  /* Tambahkan scroll smooth */
  html {
    scroll-behavior: smooth;
  }
`;