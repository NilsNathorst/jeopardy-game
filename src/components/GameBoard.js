import React, { Component } from "react";
import styled from "styled-components";
import Column from "./Column";
import Categories from "./Categories";
import Teams from "./Teams";
import Grid from "./templates/Grid";
const Container = styled(Grid)`
  margin: ${({ theme }) => theme.gridGap};
  column-gap: ${({ theme }) => theme.gridGap};
  height: 73vh;
`;

class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [
        {
          name: "Lag 1",
          score: 0
        },
        {
          name: "Lag 2",
          score: 0
        },
        {
          name: "Lag 3",
          score: 0
        },
        {
          name: "Lag 4",
          score: 0
        }
      ]
    };
  }

  correctAnswer = (value, name, wasCorrect) => {
    wasCorrect
      ? this.setState(prevState => ({
          teams: prevState.teams.map(team =>
            team.name === name ? { ...team, score: team.score + value } : team
          )
        }))
      : this.setState(prevState => ({
          teams: prevState.teams.map(team =>
            team.name === name ? { ...team, score: team.score - value } : team
          )
        }));
  };
  render() {
    return (
      <>
        <Categories items={this.props.items[0]} />
        <Container>
          {Object.keys(this.props.items[0]).map((category, key) => {
            return (
              <Column
                key={key}
                onClick={this.correctAnswer}
                items={this.props.items[0][category]}
              />
            );
          })}
        </Container>
        <Teams teamInfo={this.state.teams} />
      </>
    );
  }
}

export default GameBoard;
