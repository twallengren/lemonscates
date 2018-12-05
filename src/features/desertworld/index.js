/*

Usage
<DesertWorld />

DesertWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'

import { tiles, collision, ontile } from '../../data/maps/desert'
import { constants } from '../../config/constants'
import store from '../../config/store'

function DesertWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
            collision,
            ontile,
        }
    })

    return (

        <div className="world">

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

        </div>

    )
}

export default DesertWorld