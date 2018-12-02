/*

Usage
<BeachWorld />

BeachWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'
import StatusDisplay from '../statusdisplay'

import { tiles, collision, ontile } from '../../data/maps/beach'
import store from '../../config/store'

function BeachWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
            collision,
            ontile,
        }
    })

    return (

        <div // Define BeachWorld position and boundaries
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in BeachWorld */}
            <Map />
            <Player />
            <StatusDisplay />

        </div>

    )
}

export default BeachWorld