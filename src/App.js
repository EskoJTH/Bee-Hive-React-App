
import React, { Component } from 'react';
import './App.css';
import Graph from './Graph/Graph.js';
import General from './General/General.js';
import Container from './Box/Container.js';


class App extends Component {
  render() {
    return (

      <div className="background">
        <div><General /></div>
        <div><Graph /></div>
        <div><Container /></div>

        <div></div>
      </div>

    );
  }
}

//<div className="background">
//</div>

export default App;
