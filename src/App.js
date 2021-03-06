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
import InventoryBar from './features/inventorybar'
import InfoPanel from './features/infopanel'

class App extends Component {
  render() {
    return (

      <div>
        <NavBar />
        <InfoPanel />
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <StatusDisplay />
          <Routes />
          <MissionDisplay />
        </div>
        <InventoryBar />
      </div>

    );
  }
}

export default App;
