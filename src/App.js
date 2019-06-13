import React, { Component } from "react";
import GameBoard from "./components/GameBoard";
import { ThemeProvider } from "styled-components";
import StartScreen from "./components/StartScreen";
import GlobalStyle from "./styles/GlobalStyle";
import Theme from "./styles/Theme";
import questions from "./database";
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <div className="App">
          <GlobalStyle />
          <StartScreen />
          <GameBoard items={questions} />
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
