import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//components
import Name from './components/name';
import Education from './components/education';
import Experience from './components/experience';
import Highlights from './components/highlights';
import Summary from './components/summary';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header style={{height:'100px'}} className="App-header">
          <Name />
        </header>
        
        <Summary />
        <Highlights />
        <Experience />
        <Education />
       
       
        
      </div>
    );
  }
}

export default App;
