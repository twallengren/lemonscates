/*

Usage
<StatusDisplay />

Main StatusDisplay.js component - contains game world

*/

import React, { Component } from 'react'
import { Link } from "react-router-dom";
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
                <Link to="/">
                    <div className='links'>MAIN MENU</div>
                </Link>
                <Link to="/lemonscates">
                    <div className='links'>CENTRAL CITY</div>
                </Link>
                <Link to="/forest">
                    <div className='links'>FOREST WORLD</div>
                </Link>
                <Link to="/desert">
                    <div className='links'>DESERT WORLD</div>
                </Link>
                <Link to="/beach">
                    <div className='links'>BEACH WORLD</div>
                </Link>
                <Link to="/winter">
                    <div className='links'>WINTER WORLD</div>
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