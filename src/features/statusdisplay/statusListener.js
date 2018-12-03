/*

Usage
statusListener(StatusDisplay)

Function to update character status
Wraps StatusDisplay in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'
import { interactionMap } from '../../config/maps'

export default function statusListener(StatusDisplay) {

    function observeInteraction(pos, interactions) {
        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE
        return interactions[rowIndex][columnIndex]
    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const currentHealth = store.getState().status.health
        const interactions = store.getState().map.ontile

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.noInteraction:

                return

            case interactionMap.healthSource:

                store.dispatch({
                    type: constants.GAIN_HEALTH,
                    payload: {
                        health: Math.min(currentHealth + 10, 100)
                    }
                })

                return

            case interactionMap.healthDrain:

                store.dispatch({
                    type: constants.LOSE_HEALTH,
                    payload: {
                        health: Math.max(currentHealth - 10, 0)
                    }
                })

                return

            default:

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