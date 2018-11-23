/*

Usage
<World />

World component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'

import { tiles } from '../../data/maps/1'

function World(props) {
    return (

        <div // Define world position and boundaries
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto',
            }}
        >
            {/* Drop game map and player component in world */}
            <Map tiles={tiles} />
            <Player />

        </div>

    )
}

export default World