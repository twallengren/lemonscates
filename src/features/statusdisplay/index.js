/*

Usage
<StatusDisplay />

Main StatusDisplay.js component - contains status like health and carryweight

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import statusListener from './statusListener'

class StatusDisplay extends Component {

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
                }}>
                <div>HEALTH: {this.props.health}</div>
                <div>CARRY WEIGHT: {this.props.carryweight}</div>
            </div>

        );
    }
}

// Function to define which information on redux state should map to props on this component
function mapStateToProps(state) {
    return {
        ...state.status,
    }
}

export default connect(mapStateToProps)(statusListener(StatusDisplay));