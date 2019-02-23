import React, { Component } from 'react';
import './index.css';
import Adventure from '../Adventure';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Adventure
        dimession="c137"
      />
        
      </div>
    );
  }
}

export default App;
