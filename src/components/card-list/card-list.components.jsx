import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

// function CardList(props) {
//   return <div className="card-list">{props.children} </div>;
// }

// export default CardList;

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
