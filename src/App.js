/*

Usage
<App />

Main App.js component - contains game world

*/

import React, { Component } from 'react'
import Routes from './Routes'
import NavBar from './features/navbar'
import StatusDisplay from './features/statusdisplay'

class App extends Component {
  render() {
    return (

      <div> {/* Div to hold game world component */}
        <NavBar />
        <Routes />
        <StatusDisplay />
      </div>

    );
  }
}

export default App;
