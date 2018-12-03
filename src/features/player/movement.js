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
            default:
                return [oldPos[0], oldPos[1]]
        }
    }

    function getSpriteLocation(direction, walkIndex) {
        switch (direction) {
            case constants.SOUTH:
                return `${constants.SPRITE_SIZE * walkIndex}px ${constants.SPRITE_SIZE * 0}px`
            case constants.EAST:
                return `${constants.SPRITE_SIZE * walkIndex}px ${constants.SPRITE_SIZE * 1}px`
            case constants.WEST:
                return `${constants.SPRITE_SIZE * walkIndex}px ${constants.SPRITE_SIZE * 2}px`
            case constants.NORTH:
                return `${constants.SPRITE_SIZE * walkIndex}px ${constants.SPRITE_SIZE * 3}px`
            default:
                return `${constants.SPRITE_SIZE * walkIndex}px ${constants.SPRITE_SIZE * 0}px`
        }
    }

    function getWalkIndex() {
        const walkIndex = store.getState().player.walkIndex
        return walkIndex >= 7 ? 0 : walkIndex + 1
    }

    function observeBoundaries(newPos, tiles) {
        const MAP_HEIGHT = constants.SPRITE_SIZE * tiles.length
        const MAP_WIDTH = constants.SPRITE_SIZE * tiles[0].length
        return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - constants.SPRITE_SIZE) && (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - constants.SPRITE_SIZE)
    }

    function observeObstruction(newPos, tiles) {
        const y = newPos[1] / constants.SPRITE_SIZE
        const x = newPos[0] / constants.SPRITE_SIZE
        const nextTile = tiles[y][x]
        return nextTile !== 1
    }

    function dispatchMove(direction, toPosition, walkIndex) {

        store.dispatch({
            type: constants.MOVE_PLAYER,
            payload: {
                position: toPosition,
                walkIndex,
                spriteLocation: getSpriteLocation(direction, walkIndex),
                direction,
            }
        })

    }

    function attemptMove(direction) {

        const oldPos = store.getState().player.position
        const newPos = getNewPosition(oldPos, direction)
        const tiles = store.getState().map.tiles
        const collision = store.getState().map.collision
        const walkIndex = getWalkIndex()

        if (observeBoundaries(newPos, tiles) && observeObstruction(newPos, collision)) {

            dispatchMove(direction, newPos, walkIndex)

        } else {

            dispatchMove(direction, oldPos, walkIndex - 1 < 0 ? 7 : walkIndex - 1)

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