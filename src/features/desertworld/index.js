/*

Usage
<DesertWorld />

DesertWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'

import { tiles, collision, ontile } from '../../data/maps/desert'
import store from '../../config/store'

function DesertWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
        }
    })

    return (

        <div // Define DesertWorld position and boundaries
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in DesertWorld */}
            <Map />
            <Player />

        </div>

    )
}

export default DesertWorld