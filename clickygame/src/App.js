import React, { Component } from 'react';
import './App.css';
import characters from './characters.json'
import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import CharacterCard from "./components/CharacterCard";


class App extends Component {
  state = {
    message: "Click an image to begin!",
    topScore: 0,
    curScore: 0,
    characters: characters,
    unselectedCharacters: characters
  }

  componentDidMount() {
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  selectCharacter = name => {
    const findCharacter = this.state.unselectedCharacters.find(item => item.name === name);

    if (findCharacter === undefined) {
      // failure to select a new Character
      this.setState({
        message: "You guessed incorrectly!",
        topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
        curScore: 0,
        characters: characters,
        unselectedCharacters: characters
      });
    }
    else {
      // success to select a new Character
      const newCharacter = this.state.unselectedCharacters.filter(item => item.name !== name);

      this.setState({
        message: "You guessed correctly!",
        curScore: this.state.curScore + 1,
        characters: characters,
        unselectedCharacters: newCharacter
      });
    }

    this.shuffleArray(characters);
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          curScore={this.state.curScore}
          topScore={this.state.topScore}
        />
        <Title />
        {
          this.state.characters.map(character => (
            <CharacterCard
              name={character.name}
              image={character.image}
              selectCharacter={this.selectCharacter}
              curScore={this.state.curScore}
            />
          ))
        }
      </Wrapper>
    );
  }
}


export default App;
