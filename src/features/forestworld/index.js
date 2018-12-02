/*

Usage
<ForestWorld />

ForestWorld component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'
import StatusDisplay from '../statusdisplay'

import { tiles, collision, ontile } from '../../data/maps/forest'
import store from '../../config/store'

function ForestWorld(props) {

    store.dispatch({
        type: 'ADD_TILES', payload: {
            tiles,
            collision,
            ontile,
        }
    })

    return (

        <div // Define ForestWorld position and boundaries
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in ForestWorld */}
            <Map />
            <Player />
            <StatusDisplay />

        </div>

    )
}

export default ForestWorld