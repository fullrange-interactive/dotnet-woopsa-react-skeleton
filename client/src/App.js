import './App.css';
import React from 'react';

let WoopsaClient = window.WoopsaClient;
let jQuery = window.jQuery;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNumber: 0.0
    };

    this.woopsaClient = new WoopsaClient("http://localhost/woopsa", jQuery);

    this.woopsaClient.onChange("/RandomNumber", this.randomNumberChanged.bind(this))
  }

  randomNumberChanged(newValue) {
    this.setState({
      randomNumber: newValue
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to dotnet-woopsa-react-skeleton!</h1>
        <h2>This is the client</h2>
        <p>The random number is: {this.state.randomNumber}</p>
      </div>
    );
  }
}

export default App;
