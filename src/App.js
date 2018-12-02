/*

Usage
<App />

Main App.js component - contains game world

*/

import React, { Component } from 'react'
import MainWorld from './features/mainworld'

class App extends Component {
  render() {
    return (

      <div> {/* Div to hold game world component */}
        <MainWorld />
      </div>

    );
  }
}

export default App;
