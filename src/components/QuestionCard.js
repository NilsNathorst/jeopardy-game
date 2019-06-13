import React, { Component } from "react";
import Question from "./Question";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.gridGap};
`;
class QuestionCard extends Component {
  render(props) {
    return (
      <Container>
        {this.props.items.map((item, key) => (
          <Question
            type={item.type}
            onClick={this.props.onClick}
            key={key}
            value={item.value}
            question={item.question}
            answer={item.answer}
            url={item.url}
          />
        ))}
      </Container>
    );
  }
}

export default QuestionCard;
