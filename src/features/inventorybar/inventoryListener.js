/*

Usage
inventoryListener(InventoryBar)

Function to update inventory
Wraps InventoryBar in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'

export default function inventoryListener(InventoryBar) {

    function attemptInteraction() {

        console.log('Interaction Attempted')

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