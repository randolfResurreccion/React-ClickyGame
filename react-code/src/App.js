import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";
import Navbar from "./components/Navbar"




class App extends Component {

  state = {
    characters,
    score : 0
  };

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }




  imageClicked = (id) => {
    // this.setState({ score: this.state.score + 1 });
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
    this.shuffleArray(id);

  };


  render() {
    return (
      <Wrapper>
      <Navbar imageClicked={this.state.score} />
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