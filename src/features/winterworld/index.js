/*

Usage
<WinterWorld />

WinterWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'
import StatusDisplay from '../statusdisplay'
import NavBar from '../navbar'

import { tiles, collision, ontile } from '../../data/maps/winter'
import { constants } from '../../config/constants'
import store from '../../config/store'

function WinterWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
            collision,
            ontile,
        }
    })

    return (

        <div className="world">

            <NavBar />

            <div // Define BeachWorld position and boundaries
                style={{
                    position: 'relative',
                    width: `${constants.SPRITE_SIZE * constants.window_size}px`,
                    height: `${constants.SPRITE_SIZE * constants.window_size}px`,
                    margin: '20px auto',
                }}
            >
                {/* Drop game map and player component in BeachWorld */}
                <Map />
                <Player />
            </div>

            <StatusDisplay />

        </div>

    )
}

export default WinterWorld