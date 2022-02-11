import react from "react";
import Form from "./Form";
import Table from "./Table";

export default class App extends react.Component {
  state = {
    characters: [],
  };
  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };
  removeCharacter = (x) => {
    const { characters } = this.state;
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== x;
      }),
    });
  };
  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}
