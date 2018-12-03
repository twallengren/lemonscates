/*

Usage
mapListener(StatusDisplay)

Function to update map based on interaction tiles
Wraps map in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'

export default function mapListener(StatusDisplay) {

    function cutDownTree() {

        const pos = store.getState().player.position
        const direction = store.getState().player.direction
        const tiles = store.getState().map.tiles
        const collision = store.getState().map.collision

        const y = pos[1] / constants.SPRITE_SIZE
        const x = pos[0] / constants.SPRITE_SIZE

        switch (direction) {

            case constants.SOUTH:

                if (tiles[y + 1][x] === 1) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y + 1][x] = 0
                    newCollision[y + 1][x] = 0

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                        }
                    })

                }

                return

            case constants.NORTH:

                if (tiles[y - 1][x] === 1) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y - 1][x] = 0
                    newCollision[y - 1][x] = 0

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                        }
                    })

                }

                return

            case constants.WEST:

                if (tiles[y][x - 1] === 1) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y][x - 1] = 0
                    newCollision[y][x - 1] = 0

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                        }
                    })

                }

                return

            case constants.EAST:

                if (tiles[y][x + 1] === 1) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y][x + 1] = 0
                    newCollision[y][x + 1] = 0

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                        }
                    })

                }

                return

            default:

                return

        }

    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const tiles = store.getState().map.tiles

        const y = pos[1] / constants.SPRITE_SIZE
        const x = pos[0] / constants.SPRITE_SIZE

        switch (interactions[y][x]) {
            case 0:
                return
            default: // default interaction - tile becomes grass after being stepped on 
                let newTiles = tiles.slice()
                let newInteractions = interactions.slice()
                newTiles[y][x] = 0
                newInteractions[y][x] = 0
                store.dispatch({
                    type: constants.TO_GRASS,
                    payload: {
                        tiles: newTiles,
                        ontile: newInteractions
                    }
                })
                return
        }

    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            case constants.c_key:
                cutDownTree()

            default:
                attemptInteraction()
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return StatusDisplay
}