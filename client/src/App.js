import './App.css';
import React from 'react';

// We need to grab these non-npm libraries from the global namespace
let WoopsaClient = window.WoopsaClient;
let jQuery = window.jQuery;

class App extends React.Component {

  constructor(props) {
    // React boilerplate code. We need to call the super constructor
    super(props);

    // Initialize the state with a randomNumber = 0
    this.state = {
      randomNumber: 0.0, 
      hello: ""

    };

    // Create a woopsa client that connects to the server on localhost -- this is the C# server application
    this.woopsaClient = new WoopsaClient("http://localhost/woopsa", jQuery);

    // We add an "onChange" listener. Which means, Woopsa will manage the fact that any time this
    // value changes on the server, Woopsa will call our "randomNumberChanged" function 
    this.woopsaClient.onChange("/RandomNumber", this.randomNumberChanged.bind(this))
    this.woopsaClient.onChange("/hello", this.HelloChanged.bind(this))
  }

  // The random number has changed, so this function simply updates our state, which will trigger
  // redrawing of the user interface (render function)
  randomNumberChanged(newValue) {
    this.setState({
      randomNumber: newValue
    });
  
  }

  HelloChanged (newValue){
    this.setState({
      hello: newValue
    });


  }

  // The render function is called every time the state changes
  render() {
    return (
      <div className="App">
        <h1>Welcome to dotnet-woopsa-react-skeleton!</h1>
        <h2>This is the client</h2>
        <p>The random number is: {this.state.randomNumber}</p>
        <h1>salut: {this.state.hello} </h1>
      </div>
    );
  }
}

export default App;
