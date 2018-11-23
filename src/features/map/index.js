/*

Usage
<Map />

Game map component - displays the map for the game

*/

import React from 'react'
import { constants } from '../../config/constants'

import './styles.css'

function getTileSprite(type) {
    switch (type) {
        case 0:
            return 'grass'
        case 5:
            return 'rock'
        case 6:
            return 'tree'
    }
}

function MapTile(props) {
    return <div
        className={`tile ${getTileSprite(props.tile)}`}
        style={{
            height: constants.SPRITE_SIZE,
            width: constants.SPRITE_SIZE
        }} />
}

function MapRow(props) {
    return props.tiles.map(tile => <MapTile tile={tile} />)
}

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '400px',
                border: '4px solid white',
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

export default Map