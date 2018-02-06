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
  

 


  imageClicked = (id) => {
    // this.setState({ score: this.state.score + 1 });
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
        <Title>The Simpsons Clicky-Game</Title>
        {this.state.characters.map(data => (
          <Card
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            imageClicked={this.imageClicked} 
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;