/*

Usage
<MainWorld />

MainWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'
import StatusDisplay from '../statusdisplay'

import { tiles, collision, ontile } from '../../data/maps/lemonscates'
import store from '../../config/store'

function MainWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
            collision,
            ontile,
        }
    })

    return (

        <div // Define MainWorld position and boundaries
            style={{
                position: 'relative',
                width: `800px`,
                height: `400px`,
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in MainWorld */}
            <Map />
            <Player />
            <StatusDisplay />

        </div>

    )
}

export default MainWorld