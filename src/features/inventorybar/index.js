/*

Usage
<InventoryBar />

Main InventoryBar.js component - contains inventory information

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import inventoryListener from './inventoryListener'

class InventoryBar extends Component {

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

                YOU ARE HOLDING NOTHING!!!

            </div>

        );
    }
}

// Function to define which information on redux state should map to props on this component
function mapStateToProps(state) {
    return {
        ...state.inventory,
    }
}

export default connect(mapStateToProps)(inventoryListener(InventoryBar));