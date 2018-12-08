/*

Usage
mapListener(Map)

Function to update map based on interaction tiles
Wraps map in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants, cutToBackgroundMap, cutToCollisionMap, cutToInteractionMap, walkToInteractionTextureMap } from '../../config/constants'
import { textureMap, interactionMap } from '../../config/maps'
import history from '../../config/history'

export default function mapListener(Map) {

    const cutablePlants = [
        textureMap.tree,
        textureMap.desertPlant,
        textureMap.forestTree,
        textureMap.snowTree,
        textureMap.genericBrush,
        textureMap.desertBrush,
        textureMap.forestBrush,
        textureMap.snowBrush,
    ]

    function cutDownTree() {

        const pos = store.getState().player.position
        const direction = store.getState().player.direction
        const tiles = store.getState().map.tiles
        const collision = store.getState().map.collision
        const interaction = store.getState().map.ontile

        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE

        switch (direction) {

            case constants.SOUTH:

                // handle boundary
                if (rowIndex + 1 > tiles.length - 1) {
                    return
                }

                if (cutablePlants.includes(tiles[rowIndex + 1][columnIndex])) {

                    let newTiles = Array.from(tiles)
                    let newCollision = Array.from(collision)
                    let newInteraction = Array.from(interaction)

                    const tileCut = tiles[rowIndex + 1][columnIndex]

                    newTiles[rowIndex + 1][columnIndex] = cutToBackgroundMap[tileCut]
                    newCollision[rowIndex + 1][columnIndex] = cutToCollisionMap[tileCut]
                    newInteraction[rowIndex + 1][columnIndex] = cutToInteractionMap[tileCut]

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                            ontile: newInteraction,
                        }
                    })

                }

                return

            case constants.NORTH:

                // handle boundary
                if (rowIndex - 1 < 0) {
                    return
                }

                if (cutablePlants.includes(tiles[rowIndex - 1][columnIndex])) {

                    let newTiles = Array.from(tiles)
                    let newCollision = Array.from(collision)
                    let newInteraction = Array.from(interaction)

                    const tileCut = tiles[rowIndex - 1][columnIndex]

                    newTiles[rowIndex - 1][columnIndex] = cutToBackgroundMap[tileCut]
                    newCollision[rowIndex - 1][columnIndex] = cutToCollisionMap[tileCut]
                    newInteraction[rowIndex - 1][columnIndex] = cutToInteractionMap[tileCut]

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                            ontile: newInteraction,
                        }
                    })

                }

                return

            case constants.WEST:

                // handle boundary
                if (columnIndex - 1 < 0) {
                    return
                }

                if (cutablePlants.includes(tiles[rowIndex][columnIndex - 1])) {

                    let newTiles = Array.from(tiles)
                    let newCollision = Array.from(collision)
                    let newInteraction = Array.from(interaction)

                    const tileCut = tiles[rowIndex][columnIndex - 1]

                    newTiles[rowIndex][columnIndex - 1] = cutToBackgroundMap[tileCut]
                    newCollision[rowIndex][columnIndex - 1] = cutToCollisionMap[tileCut]
                    newInteraction[rowIndex][columnIndex - 1] = cutToInteractionMap[tileCut]

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                            ontile: newInteraction,
                        }
                    })

                }

                return

            case constants.EAST:

                // handle boundary
                if (columnIndex + 1 > tiles[0].length - 1) {
                    return
                }

                if (cutablePlants.includes(tiles[rowIndex][columnIndex + 1])) {

                    let newTiles = Array.from(tiles)
                    let newCollision = Array.from(collision)
                    let newInteraction = Array.from(interaction)

                    const tileCut = tiles[rowIndex][columnIndex + 1]

                    newTiles[rowIndex][columnIndex + 1] = cutToBackgroundMap[tileCut]
                    newCollision[rowIndex][columnIndex + 1] = cutToCollisionMap[tileCut]
                    newInteraction[rowIndex][columnIndex + 1] = cutToInteractionMap[tileCut]

                    store.dispatch({
                        type: constants.CUT_TREE,
                        payload: {
                            tiles: newTiles,
                            collision: newCollision,
                            ontile: newInteraction,
                        }
                    })

                }

                return

            default:

                return

        }

    }

    function travelTo() {

        const pos = store.getState().player.position
        const interaction = store.getState().map.ontile

        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE

        switch (interaction[rowIndex][columnIndex]) {

            case interactionMap.noInteraction:

                return

            case interactionMap.toBeach:

                history.push('/beach')

                return

            case interactionMap.toDesert:

                history.push('/desert')

                return

            case interactionMap.toForest:

                history.push('/forest')

                return

            case interactionMap.toLemonscates:

                history.push('/lemonscates')

                return

            case interactionMap.toWinter:

                history.push('/winter')

                return

            default:

                return

        }

    }

    function toGround(rowIndex, columnIndex, tiles, interaction) {

        let newTiles = Array.from(tiles)
        let newInteraction = Array.from(interaction)

        const tileCut = tiles[rowIndex][columnIndex]

        newTiles[rowIndex][columnIndex] = walkToInteractionTextureMap[tileCut]
        newInteraction[rowIndex][columnIndex] = interactionMap.noInteraction

        store.dispatch({
            type: constants.TO_GROUND,
            payload: {
                tiles: newTiles,
                ontile: newInteraction
            }
        })

    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interaction = store.getState().map.ontile
        const tiles = store.getState().map.tiles
        const mission = store.getState().mission

        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE

        switch (interaction[rowIndex][columnIndex]) {

            case mission.finalInteraction:

                if (mission.missionComplete()) {

                    toGround(mission.startingCoordinates[0], mission.startingCoordinates[1], tiles, interaction)
                    toGround(rowIndex, columnIndex, tiles, interaction)

                } else {

                    toGround(rowIndex, columnIndex, tiles, interaction)

                }

                return

            case interactionMap.noInteraction:

                return

            case interactionMap.addChoppedWood:

                toGround(rowIndex, columnIndex, tiles, interaction)

                return

            case interactionMap.healthDrain:

                toGround(rowIndex, columnIndex, tiles, interaction)

                return

            case interactionMap.healthSource:

                toGround(rowIndex, columnIndex, tiles, interaction)

                return

            default: // default interaction - none

                return
        }

    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            case constants.c_key:

                cutDownTree()

                return

            case constants.t_key:

                travelTo()

                return

            default:

                attemptInteraction()

                return
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return Map
}