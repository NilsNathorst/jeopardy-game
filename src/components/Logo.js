import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  fill: white;
`;

const Logo = props => {
  return (
    <StyledLogo>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 410 410"
        width="51"
        height="51"
      >
        <path d="M97.5 20.5s-55.6-14.3-73 10-38.2 84.3-12.2 106c1.2.8 4.1 5.1 4.1 5.1s51.6 46.5 68.7 62.1c2.1 1.9 2.3 5.1.6 7.4C80.4 218.6 4 328.2 4 328.2l7.8 63.5S97 402.1 99.6 403c2.6.9 103.8-64.8 103.8-64.8l33.5 72.1s145.2-19.1 140.4-74.7c-4.1-47.8-93-156.8-90.4-156.8 2.6 0 90.4-147.4 90.4-147.4L263.4 0l-96.9 75.5-69-55z" />
      </svg>
    </StyledLogo>
  );
};

export default Logo;
