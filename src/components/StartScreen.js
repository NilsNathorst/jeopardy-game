import styled from "styled-components";
import introScreenImage from "../styles/assets/images/Vxjeapardy.jpg";
import React, { Component } from "react";
const FullscreenImage = styled.div`
  background-image: url(${introScreenImage});
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  z-index: 10000;
  margin: 0 !important;
`;
class StartScreen extends Component {
  startGame(e) {
    e.currentTarget.classList.add("remove-start-screen");
  }
  render() {
    return <FullscreenImage onClick={this.startGame} />;
  }
}

export default StartScreen;
