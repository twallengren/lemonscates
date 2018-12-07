/*

Usage
<InfoPanel />

Main InfoPanel.js component - contains help information

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import infoListener from './infoListener'

class InfoPanel extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (

            <div
                style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '50px',
                }}>

                {this.props.message}

            </div>

        );
    }
}

// Function to define which information on redux state should map to props on this component
function mapStateToProps(state) {
    return {
        ...state.info,
    }
}

export default connect(mapStateToProps)(infoListener(InfoPanel));