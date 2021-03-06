/*

Usage
<Map />

Game map component - displays the map for the game

*/

import React from 'react'
import { connect } from 'react-redux'
import { constants } from '../../config/constants'
import mapListener from './mapListener'
import { textureMap } from '../../config/maps'
import _ from 'lodash'

import './styles.css'

function getTileSprite(type) {
    return _.invert(textureMap)[type]
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
    return <div
        className="row"
        style={{
            height: constants.SPRITE_SIZE,
        }}
    >
        {
            props.tiles.map(tile => <MapTile tile={tile} />)
        }
    </div>
}

function getLocalTiles(rowInd, colInd, props) {

    return props.tiles
        .slice(Math.max(rowInd - Math.floor(constants.window_size / 2), 0),
            Math.min(rowInd + Math.floor(constants.window_size / 2) + 1, constants.SPRITE_SIZE * props.tiles.length))
        .map(row => row.filter((element, index) => {
            return ((index >= Math.max(colInd - Math.floor(constants.window_size / 2), 0)) &&
                (index <= Math.min(colInd + Math.floor(constants.window_size / 2), constants.SPRITE_SIZE * props.tiles[0].length)))
        }))

}

function Map(props) {

    const rowInd = props.position[1] / constants.SPRITE_SIZE
    const colInd = props.position[0] / constants.SPRITE_SIZE

    let top = '0px'
    let left = '0px'

    if (!Number.isInteger(rowInd)) {
        top = `${-constants.SPRITE_SIZE / constants.steps_per_square}px`
    }



    if (!Number.isInteger(colInd)) {
        left = `${-constants.SPRITE_SIZE / constants.steps_per_square}px`
    }

    return (

        <div
            style={{
                position: 'relative',
                top: top,
                left: left,
                width: `${constants.SPRITE_SIZE * constants.window_size}px`,
                height: `${constants.SPRITE_SIZE * constants.window_size}px`,
            }}
        >
            {
                getLocalTiles(Math.floor(rowInd), Math.floor(colInd), props).map(row => <MapRow tiles={row} />)
            }
        </div>

    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles,
        position: state.player.position,
    }
}

export default connect(mapStateToProps)(mapListener(Map))