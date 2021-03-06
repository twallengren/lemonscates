/*

Usage
<MainWorld />

MainWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'

import { tiles, collision, ontile } from '../../data/maps/lemonscates'
import { constants } from '../../config/constants'
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

        <div className="world">

            <div // Define MainWorld position and boundaries
                style={{
                    position: 'relative',
                    width: `${constants.SPRITE_SIZE * constants.window_size}px`,
                    height: `${constants.SPRITE_SIZE * constants.window_size}px`,
                    margin: '20px auto',
                }}
            >
                {/* Drop game map and player component in MainWorld */}
                <Map />
                <Player />
            </div>

        </div>

    )
}

export default MainWorld