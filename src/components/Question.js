import React, { Component } from "react";
import styled from "styled-components";
import Modal from "./Modal";
import Logo from "./Logo";
const Card = styled.div`
  font-size: ${({ theme }) => theme.fontSmall};
  text-align: center;
  height: 140px;
  > p {
    font-size: ${({ theme }) => theme.fontLarge};
    line-height: 200%;
    color: ${({ theme }) => theme.green};
  }
  ${props =>
    props.taken
      ? `{
        background: rgba(0,0,0,0);
        > p {
        visibility: hidden;
        }
      }`
      : `background: ${props.theme.yellow};`}
  .close {
    right: ${({ theme }) => theme.gridGap};
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

class Question extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      hasBeenTaken: false
    };
  }
  toggleQuestionModal = () => {
    this.setState({
      show: !this.state.show,
      hasBeenTaken: true
    });
  };

  render() {
    return (
      <Card taken={this.state.hasBeenTaken}>
        <p onClick={this.toggleQuestionModal}>{this.props.value}</p>
        {this.state.show ? (
          <div>
            <Modal
              onClick={this.props.onClick}
              type={this.props.type}
              value={this.props.value}
              question={this.props.question}
              answer={this.props.answer}
              url={this.props.url}
            >
              <div onClick={this.toggleQuestionModal} className="close">
                <Logo />
              </div>
            </Modal>
          </div>
        ) : null}
      </Card>
    );
  }
}

export default Question;
