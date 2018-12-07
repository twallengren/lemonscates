/*

Usage
<InventoryBar />

Main InventoryBar.js component - contains inventory information

*/

import React, { Component } from 'react'
import { connect } from 'react-redux'
import inventoryListener from './inventoryListener'
import Item from './item'

class InventoryBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {

        // Define inventory to display
        const inventory = Object.keys(this.props).filter(key => { return (key !== 'dispatch') }).map(key => {

            console.log(key)

            return (

                // Put each item in an Item component
                <Item
                    name={this.props[key].name}
                    weight={this.props[key].weight}
                    quantity={this.props[key].quantity}
                />

            );
        })

        return (

            <div
                style={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                }}>

                {inventory}

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