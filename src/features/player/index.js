/*

Usage
<Player />

Player component - displays character on map and tracks props

*/

import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleMovement from './movement'

function Player(props) {
    return (

        // Div that contains game character
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: '0 0',
                width: '40px',
                height: '40px',
            }}
        />

    )
}

// Function to define which information on redux state should map to props on this component
function mapStateToProps(state) {
    return {
        ...state.player,
    }
}

// Connect component to redux, handle movement on export
export default connect(mapStateToProps)(handleMovement(Player))