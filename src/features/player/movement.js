/*

Usage
handleMovement(Player)

Function to update character movement on map
Wraps player in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'

export default function handleMovement(player) {

    function getNewPosition(direction) {
        const oldPos = store.getState().player.position
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

    function observeBoundaries(oldPos, newPos) {
        return (newPos[0] >= 0 && newPos[0] <= constants.MAP_WIDTH - constants.SPRITE_SIZE) && (newPos[1] >= 0 && newPos[1] <= constants.MAP_HEIGHT - constants.SPRITE_SIZE) ? newPos : oldPos
    }

    function dispatchMove(direction) {
        const oldPos = store.getState().player.position
        store.dispatch({
            type: constants.MOVE_PLAYER,
            payload: {
                position: observeBoundaries(oldPos, getNewPosition(direction))
            }
        })
    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            // left arrow
            case constants.left_arrow:
                return dispatchMove(constants.WEST)

            // up arrow
            case constants.up_arrow:
                return dispatchMove(constants.NORTH)

            // right arrow
            case constants.right_arrow:
                return dispatchMove(constants.EAST)

            // down arrow
            case constants.down_arrow:
                return dispatchMove(constants.SOUTH)

            default:
                console.log(e.keyCode)
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return player
}