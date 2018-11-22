/*

Usage
<App />

Main App.js component - contains game world

*/

import React, { Component } from 'react'
import World from './features/world'

class App extends Component {
  render() {
    return (

      <div> {/* Div to hold game world component */}
        <World />
      </div>

    );
  }
}

export default App;
