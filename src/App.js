import React, { Component } from 'react';
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";
import './App.css';

class App extends Component {
  
  constructor(){
    super()
    this.state={selected: 'one'}
  }

  handleCircleSelect = (circle) => {
    this.setState({
      selected: circle
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            selected={this.state.selected}
            handleCircleSelect={this.handleCircleSelect}
          />
          <Circles
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;