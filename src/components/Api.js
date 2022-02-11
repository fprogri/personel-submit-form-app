import react from "react";

class App extends react.Component {
  state = { data: [] };

  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=skender+beu&format=json&origin=*";
    fetch(url)
      .then((x) => x.json())
      .then((x) => {
        this.setState({ data: x });
      });
  }

  render() {
    const { data } = this.state;
    const result = data.map((x, y) => {
      return <li key={y}>{x}</li>;
    });
    return <ul>{result}</ul>;
  }
}
export default App;
