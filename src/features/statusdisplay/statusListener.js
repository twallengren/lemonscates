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
        const currentWeight = store.getState().status.carryweight
        const interactions = store.getState().map.ontile

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.noInteraction:

                return

            case interactionMap.healthSource:

                store.dispatch({
                    type: constants.CHANGE_HEALTH,
                    payload: {
                        health: Math.min(currentHealth + 10, 100)
                    }
                })

                return

            case interactionMap.healthDrain:

                store.dispatch({
                    type: constants.CHANGE_HEALTH,
                    payload: {
                        health: Math.max(currentHealth - 10, 0)
                    }
                })

                return

            case interactionMap.addWeight:

                store.dispatch({
                    type: constants.CHANGE_WEIGHT,
                    payload: {
                        carryweight: currentWeight + 10
                    }
                })

            default:

                return

        }

    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            default:
                attemptInteraction()
                return
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return StatusDisplay
}