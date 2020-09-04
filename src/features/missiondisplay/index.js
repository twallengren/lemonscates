/*

Usage
<MissionDisplay />

Main MissionDisplay.js component - contains status like health and carryweight

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import missionListener from './missionListener'

class MissionDisplay extends Component {

    render() {
        return (

            <div
                style={{
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '25vw',
                }}>
                <div>{this.props.missionText}</div>
            </div>

        );
    }
}

// Function to define which information on redux state should map to props on this component
function mapStateToProps(state) {
    return {
        ...state.mission,
    }
}

export default connect(mapStateToProps)(missionListener(MissionDisplay));