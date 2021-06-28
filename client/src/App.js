import './App.css';
import React from 'react';
//import Stock from './Stock';
import Plot from 'react-plotly.js';




// We need to grab these non-npm libraries from the global namespace
let WoopsaClient = window.WoopsaClient;
let jQuery = window.jQuery;


var xvalue = [];
var yvalue = [];
//var a;
//var b;






class App extends React.Component {


  




  constructor(props) {
    
    // React boilerplate code. We need to call the super constructor
    super(props);

    // Initialize the state with a randomNumber = 0
    this.state = {
      randomNumber: 0.0,
      hello: "",
      time24: ""

    };


    // Create a woopsa client that connects to the server on localhost -- this is the C# server application
    this.woopsaClient = new WoopsaClient("http://localhost/woopsa", jQuery);

    // We add an "onChange" listener. Which means, Woopsa will manage the fact that any time this
    // value changes on the server, Woopsa will call our "randomNumberChanged" function 
    this.woopsaClient.onChange("/RandomNumber", this.randomNumberChanged.bind(this))
    this.woopsaClient.onChange("/hello", this.HelloChanged.bind(this))
    this.woopsaClient.onChange("/time24", this.timeChanged.bind(this))
  }

  // The random number has changed, so this function simply updates our state, which will trigger
  // redrawing of the user interface (render function)
  randomNumberChanged(newValue) {
    this.setState({
      randomNumber: newValue *1000,

    });

    xvalue.push(this.state.randomNumber);
    //console.log(xvalue);
  }

  HelloChanged(newValue) {
    this.setState({
      hello: newValue
    });



  }

  timeChanged(newValue) {
    this.setState({
      time24: newValue,
  
    });

    yvalue.push(this.state.time24);
    
  }





  // The render function is called every time the state changes
  render() {
    return (
      
      <div className="App">
        <h1>Welcome to dotnet-woopsa-react-skeleton!</h1>
        <h2>This is the clllllient</h2>
        <p>The random number is: {this.state.randomNumber}</p>
        <p>Time is : {this.state.time24}</p>
        <h1>salut: {this.state.hello} </h1>
        <h1> {xvalue} </h1>
      
        <Plot
          data={[
            {
              x: yvalue,
              y: xvalue,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'fuck'}}
        />


      </div>
    );
  }

}







export default App;