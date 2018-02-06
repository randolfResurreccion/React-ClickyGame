import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";
class App extends Component {
  
  state = {
    characters,
    score: 0
  };
  

  imageClicked = (event) => {
    // this.setState({ score: this.state.score + 1 });
    event.preventDefault();
    console.log("clicked");
  };


  // clickImage = (id) => {

  //   const Characters = this.state.characters;
  //   const isClicked = Characters.filter(Character => Character.id === id);
    
  //   if(isClicked) 
  
  // };
  
 
 
 
 
  render() {
    return (
      <Wrapper>
        <Title>React Clicky-Game</Title>
        {this.state.characters.map(data => (
          <Card
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;