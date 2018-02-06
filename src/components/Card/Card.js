import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card" >
    <div className="img-container">
    <button onClick={()=>props.imageClicked(props.id)}>
    <img alt={props.name} src={props.image}/>
      </button>
    </div>
    <div className="content">
      <ul>
      </ul>
    </div>

  </div>
);
export default Card;

// {/* <button><img src="./img/google.png" alt="my image" onClick={this.myfunction} /></button> */}