import React from "react";
import "./Word.css";

const Word = (props) => {
  return (
    <li>
      Słowo po angielsku: <strong>{props.english}</strong>
      <br></br>
      Tłumaczenie: <strong>{props.polish}</strong>
    </li>
  );
};

export default Word;
