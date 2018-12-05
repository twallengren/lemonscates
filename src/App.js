/*

Usage
<App />

Main App.js component - contains game world

*/

import React, { Component } from 'react'
import Routes from './Routes'
import NavBar from './features/navbar'
import StatusDisplay from './features/statusdisplay'
import MissionDisplay from './features/missiondisplay'

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <div style={{
          display: 'flex',
          justifyContent: 'space-around'
        }}>
          <StatusDisplay />
          <Routes />
          <MissionDisplay />
        </div>
      </div>

    );
  }
}

export default App;
