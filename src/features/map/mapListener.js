/*

Usage
mapListener(StatusDisplay)

Function to update map based on interaction tiles
Wraps map in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants, cutToBackgroundMap, cutToCollisionMap } from '../../config/constants'
import { textureMap } from '../../config/maps'

export default function mapListener(StatusDisplay) {

    const cutable = [textureMap.tree, textureMap.desertPlant, textureMap.forestTree]

    function cutDownTree() {

        const pos = store.getState().player.position
        const direction = store.getState().player.direction
        const tiles = store.getState().map.tiles
        const collision = store.getState().map.collision

        const y = pos[1] / constants.SPRITE_SIZE
        const x = pos[0] / constants.SPRITE_SIZE

        switch (direction) {

            case constants.SOUTH:

                // handle boundary
                if (y + 1 > tiles.length - 1) {
                    return
                }

                if (cutable.includes(tiles[y + 1][x])) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y + 1][x] = cutToBackgroundMap[tiles[y + 1][x]]
                    newCollision[y + 1][x] = cutToCollisionMap[tiles[y + 1][x]]

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

                // handle boundary
                if (y - 1 < 0) {
                    return
                }

                if (cutable.includes(tiles[y - 1][x])) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y - 1][x] = cutToBackgroundMap[tiles[y - 1][x]]
                    newCollision[y - 1][x] = cutToCollisionMap[tiles[y - 1][x]]

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

                // handle boundary
                if (x - 1 < 0) {
                    return
                }

                if (cutable.includes(tiles[y][x - 1])) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y][x - 1] = cutToBackgroundMap[tiles[y][x - 1]]
                    newCollision[y][x - 1] = cutToCollisionMap[tiles[y][x - 1]]

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

                // handle boundary
                if (x + 1 > tiles[0].length - 1) {
                    return
                }

                if (cutable.includes(tiles[y][x + 1])) {

                    let newTiles = tiles.slice()
                    let newCollision = collision.slice()

                    newTiles[y][x + 1] = cutToBackgroundMap[tiles[y][x + 1]]
                    newCollision[y][x + 1] = cutToCollisionMap[tiles[y][x + 1]]

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