/*

Usage
infoListener(InfoDisplay)

Function to update mission status
Wraps InfoDisplay in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'
import { interactionMap } from '../../config/maps'

export default function infoListener(InfoDisplay) {

    function observeInteraction(pos, interactions) {
        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE
        return interactions[rowIndex][columnIndex]
    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const current = store.getState().info.message
        const missionID = store.getState().mission.id

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.noInteraction:

                if (current === null) {

                    return

                } else {

                    store.dispatch({
                        type: constants.CHANGE_INFO,
                        payload: {

                            message: null

                        }
                    })

                    return

                }

            case interactionMap.startTestMission:

                if (missionID === null) {

                    store.dispatch({
                        type: constants.CHANGE_INFO,
                        payload: {

                            message: constants.S_TO_START

                        }
                    })

                    return

                } else {

                    store.dispatch({
                        type: constants.CHANGE_INFO,
                        payload: {

                            message: constants.S_TO_STOP

                        }
                    })

                    return

                }

            case interactionMap.toBeach:

                store.dispatch({
                    type: constants.CHANGE_INFO,
                    payload: {

                        message: constants.T_TO_TRAVEL

                    }
                })

                return

            case interactionMap.toDesert:

                store.dispatch({
                    type: constants.CHANGE_INFO,
                    payload: {

                        message: constants.T_TO_TRAVEL

                    }
                })

                return

            case interactionMap.toForest:

                store.dispatch({
                    type: constants.CHANGE_INFO,
                    payload: {

                        message: constants.T_TO_TRAVEL

                    }
                })

                return

            case interactionMap.toLemonscates:

                store.dispatch({
                    type: constants.CHANGE_INFO,
                    payload: {

                        message: constants.T_TO_TRAVEL

                    }
                })

                return

            case interactionMap.toWinter:

                store.dispatch({
                    type: constants.CHANGE_INFO,
                    payload: {

                        message: constants.T_TO_TRAVEL

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

                return
        }
    }

    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return InfoDisplay
}