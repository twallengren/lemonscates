/*

Usage
<Player />

Player component - displays character on map and tracks props

*/

import React from 'react'
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import handleMovement from './movement'
import { constants } from '../../config/constants'

function Player(props) {
    return (

        // Div that contains game character
        <div
            style={{
                position: 'absolute',
                top: constants.SPRITE_SIZE * Math.floor(constants.window_size / 2),
                left: constants.SPRITE_SIZE * Math.floor(constants.window_size / 2),
                backgroundImage: `url('${walkSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: `${constants.SPRITE_SIZE}px`,
                height: `${constants.SPRITE_SIZE}px`,
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