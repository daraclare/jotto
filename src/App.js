import React, { Component } from "react";
import "./App.css";
import { Congrats } from "./Congrats";
import { GuessedWord } from "./GuessedWord";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWord
          guessedWords={[
            {
              guessedWord: "train",
              letterMatchCount: 3
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
