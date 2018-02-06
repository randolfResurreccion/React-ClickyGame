import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import characters from "./characters.json";
import "./App.css";
class App extends Component {
  
  state = {
    characters
  };
  
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>React Clicky-Game</Title>
        {this.state.characters.map(data => (
          <Card
            // removeFriend={this.removeFriend}
            id={data.id}
            key={data.id}
            name={data.name}
            image={data.image}
            occupation={data.occupation}
            location={data.location}
          />
        ))}
      </Wrapper>
    );
  }
}
export default App;