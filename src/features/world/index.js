/*

Usage
<World />

World component - contains the game map and the player

*/

import React from 'react'
import Map from '../map'
import Player from '../player'

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
            <Map />
            <Player />

        </div>

    )
}

export default World