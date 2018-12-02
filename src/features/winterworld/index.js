/*

Usage
<WinterWorld />

WinterWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'
import StatusDisplay from '../statusdisplay'

import { tiles, collision, ontile } from '../../data/maps/winter'
import store from '../../config/store'

function WinterWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
        }
    })

    return (

        <div // Define WinterWorld position and boundaries
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in WinterWorld */}
            <Map />
            <Player />
            <StatusDisplay />

        </div>

    )
}

export default WinterWorld