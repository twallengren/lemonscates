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

    // function that returns the numerical value of the interaction occuring
    // at a given position
    function observeInteraction(pos, interactions) {
        const rowIndex = Math.floor(pos[1] / constants.SPRITE_SIZE)
        const columnIndex = Math.floor(pos[0] / constants.SPRITE_SIZE)
        return interactions[rowIndex][columnIndex]
    }

    // function triggered when any key is pressed
    // updates status attributes on redux state depending on interaction at current tile
    function attemptInteraction() {

        // get necessary values from redux state
        const pos = store.getState().player.position
        const currentHealth = store.getState().status.health
        const currentWeight = store.getState().status.carryweight
        const interactions = store.getState().map.ontile

        // observe the interaction defined at current tile
        switch (observeInteraction(pos, interactions)) {

            // if no interaction is defined
            case interactionMap.noInteraction:

                // do nothing
                return

            // current tile should increase health of player
            case interactionMap.healthSource:

                // dispatch updated health to redux state
                store.dispatch({
                    type: constants.CHANGE_HEALTH,
                    payload: {
                        health: Math.min(currentHealth + 10, 100)
                    }
                })

                return

            // current tile should decrease health of player
            case interactionMap.healthDrain:

                // dispatch updated health to redux state
                store.dispatch({
                    type: constants.CHANGE_HEALTH,
                    payload: {
                        health: Math.max(currentHealth - 10, 0)
                    }
                })

                return

            // player collects wood on current tile
            case interactionMap.addChoppedWood:

                // dispatch updated weight to redux state
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

    // function that is run anytime a key is pressed
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