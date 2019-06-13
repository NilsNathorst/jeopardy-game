import React from "react";
import QuestionCard from "./QuestionCard";
const Column = props => {
  return <QuestionCard onClick={props.onClick} items={props.items} />;
};

export default Column;
