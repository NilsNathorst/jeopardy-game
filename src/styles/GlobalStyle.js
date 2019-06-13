import { createGlobalStyle } from "styled-components";
import EksellFont from "./assets/fonts/large.woff";
const GlobalStyle = createGlobalStyle`
  @import url('https://use.typekit.net/klx7frh.css');

  @font-face {
  font-family: 'Eksell';
  src : url(${EksellFont}) format('woff');
  font-weight:normal;
}
  *,*::before,*::after {
  
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: relative;
    font-family: Eksell;
	}
	body {
    background-color: ${({ theme }) => theme.lightblue};
  }
.fade-in {
  animation: fade-in 500ms ease-in-out;
  }
  @keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
	#root, .App {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
	}
  .App {
    > div {
    margin-top: ${({ theme }) => theme.gridGap};
    }
  }
`;

export default GlobalStyle;
