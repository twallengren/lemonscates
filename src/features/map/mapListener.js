/*

Usage
mapListener(StatusDisplay)

Function to update character movement on map
Wraps StatusDisplay in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'

export default function mapListener(StatusDisplay) {

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const tiles = store.getState().map.tiles

        const y = pos[1] / constants.SPRITE_SIZE
        const x = pos[0] / constants.SPRITE_SIZE

        switch (interactions[y][x]) {
            case 0:
                return
            // case 1:
            //     store.dispatch({
            //         type: constants.TO_GRASS,
            //         payload: {
            //             health: Math.min(currentHealth + 10, 100)
            //         }
            //     })
            //     return
            // case 2:
            //     store.dispatch({
            //         type: constants.TO_GRASS,
            //         payload: {
            //             health: Math.max(currentHealth - 10, 0)
            //         }
            //     })
            //     return
            default:
                console.log('check')
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

            default:
                attemptInteraction()
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return StatusDisplay
}