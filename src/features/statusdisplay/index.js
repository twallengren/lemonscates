/*

Usage
<StatusDisplay />

Main StatusDisplay.js component - contains game world

*/

import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { constants } from '../../config/constants'
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
                HEALTH: {this.props.health}
                <Link to="/">
                    <div className='links'>MAIN MENU</div>
                </Link>
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