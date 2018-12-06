/*

Usage
inventoryListener(InventoryBar)

Function to update inventory
Wraps InventoryBar in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'
import { interactionMap } from '../../config/maps'

export default function inventoryListener(InventoryBar) {

    function observeInteraction(pos, interactions) {
        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE
        return interactions[rowIndex][columnIndex]
    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.noInteraction:

                return

            case interactionMap.addChoppedWood:

                const current = store.getState().inventory.wood.quantity

                store.dispatch({
                    type: constants.ADD_WOOD,
                    payload: {

                        wood: {
                            id: 100,
                            weight: 10,
                            quantity: current + 1,
                            name: 'Chopped Wood'
                        }

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

    return InventoryBar
}