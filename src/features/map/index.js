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

function Map(props) {
    return (
        <div
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: `${constants.SPRITE_SIZE * props.tiles[0].length}px`,
                height: `${constants.SPRITE_SIZE * props.tiles.length}px`,
                border: '4px solid white',
            }}
        >
            {
                props.tiles.map(row => <MapRow tiles={row} />)
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(mapListener(Map))