/*

Usage
<MissionDisplay />

Main MissionDisplay.js component - contains status like health and carryweight

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import missionListener from './missionListener'

class MissionDisplay extends Component {

    constructor(props) {
        super(props)
    }

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
                <div>MISSION: {this.props.mission}</div>
                <div>DESCRIPTION: {this.props.description}</div>
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