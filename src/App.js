/*

Usage
<App />

Main App.js component - contains game world

*/

import React, { Component } from 'react'
import Routes from './Routes'

class App extends Component {
  render() {
    return (

      <div> {/* Div to hold game world component */}
        <Routes />
      </div>

    );
  }
}

export default App;
