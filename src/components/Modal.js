import React, { Component } from "react";
import styled from "styled-components";
import Button from "./Button";
import placeholder from "../styles/assets/images/VxjeapardyDark.jpg";
import Grid from "./templates/Grid";

const TeamButtonsContainer = styled(Grid)`
  position: absolute;
  transform: translateX(-${({ theme }) => theme.gridGap});
  padding: ${({ theme }) => theme.gridGap};
  grid-template-columns: repeat(4, 1fr);
  bottom: 0;
`;
const ButtonContainer = styled.div`
  display: flex;
`;
const TeamButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    font-size: ${({ theme }) => theme.fontSmall};
  }
`;
const Overlay = styled.div`
  z-index: 100;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
const Popup = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.gridGap};
  transition: 0.45s;
  width: 80%;
  height: 76.8%;
  z-index: 1000;
  background: ${({ theme }) => theme.pink};
  position: fixed;
  left: 10%;
  top: 10%;
  p {
    margin: 15% 0 0 10%;
    width: 80%;
    padding: 8px;
    text-align: center;
    font-size: ${({ theme }) => theme.fontLarge};
  }
  video {
    width: 75%;
    height: 85%;
  }
`;
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
  }
  componentDidMount() {
    this.setState({
      className: "fade-in"
    });
  }

  render() {
    return (
      <Overlay>
        <Popup className={this.state.className}>
          {this.props.children}
          {this.props.url ? (
            <video title={this.props.title} controls poster={placeholder}>
              <source src={this.props.url} type="video/mp4" />
            </video>
          ) : (
            <p>{this.props.question}</p>
          )}
          <TeamButtonsContainer>
            <TeamButtons>
              <h3>Lag 1</h3>
              <ButtonContainer>
                <Button
                  correct
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 1", true)
                  }
                />
                <Button
                  incorrect
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 1", false)
                  }
                />
              </ButtonContainer>
            </TeamButtons>
            <TeamButtons>
              <h3>Lag 2</h3>
              <ButtonContainer>
                <Button
                  correct
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 2", true)
                  }
                />
                <Button
                  incorrect
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 2", false)
                  }
                />
              </ButtonContainer>
            </TeamButtons>
            <TeamButtons>
              <h3>Lag 3</h3>
              <ButtonContainer>
                <Button
                  correct
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 3", true)
                  }
                />
                <Button
                  incorrect
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 3", false)
                  }
                />
              </ButtonContainer>
            </TeamButtons>
            <TeamButtons>
              <h3>Lag 4</h3>
              <ButtonContainer>
                <Button
                  correct
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 4", true)
                  }
                />
                <Button
                  incorrect
                  onClick={() =>
                    this.props.onClick(this.props.value, "Lag 4", false)
                  }
                />
              </ButtonContainer>
            </TeamButtons>
          </TeamButtonsContainer>
        </Popup>
      </Overlay>
    );
  }
}

export default Modal;
