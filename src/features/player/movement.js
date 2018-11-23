/*

Usage
handleMovement(Player)

Function to update character movement on map
Wraps player in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(oldPos, direction) {
        switch (direction) {
            case constants.WEST:
                return [oldPos[0] - constants.SPRITE_SIZE, oldPos[1]]
            case constants.EAST:
                return [oldPos[0] + constants.SPRITE_SIZE, oldPos[1]]
            case constants.NORTH:
                return [oldPos[0], oldPos[1] - constants.SPRITE_SIZE]
            case constants.SOUTH:
                return [oldPos[0], oldPos[1] + constants.SPRITE_SIZE]
        }
    }

    function observeBoundaries(newPos) {
        return (newPos[0] >= 0 && newPos[0] <= constants.MAP_WIDTH - constants.SPRITE_SIZE) && (newPos[1] >= 0 && newPos[1] <= constants.MAP_HEIGHT - constants.SPRITE_SIZE)
    }

    function observeObstruction(newPos) {
        const tiles = store.getState().map.tiles
        const y = newPos[1] / constants.SPRITE_SIZE
        const x = newPos[0] / constants.SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile < 5
    }

    function dispatchMove(direction, newPos) {

        store.dispatch({
            type: constants.MOVE_PLAYER,
            payload: {
                position: newPos,
                direction,
            }
        })
    }

    function attemptMove(direction) {

        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)

        if (observeBoundaries(newPos) && observeObstruction(newPos)) {
            dispatchMove(direction, newPos)
        }

    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            // left arrow
            case constants.left_arrow:
                return attemptMove(constants.WEST)

            // up arrow
            case constants.up_arrow:
                return attemptMove(constants.NORTH)

            // right arrow
            case constants.right_arrow:
                return attemptMove(constants.EAST)

            // down arrow
            case constants.down_arrow:
                return attemptMove(constants.SOUTH)

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return player
}