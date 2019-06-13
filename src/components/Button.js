import styled from "styled-components";
import React from "react";
const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSmall};
  width: 45px;
  height: 45px;
  border: solid black 2px;
  ${props =>
    props.correct
      ? `{ background: ${props.theme.green}; margin-right: 12px;}`
      : null}
  ${props => (props.incorrect ? `{ background: transparent}` : null)}
`;

const Button = props => {
  return (
    <StyledButton
      correct={props.correct}
      incorrect={props.incorrect}
      onClick={props.onClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
