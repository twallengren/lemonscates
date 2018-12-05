/*

Usage
missionListener(MissionDisplay)

Function to update mission status
Wraps MissionDisplay in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'
import { interactionMap } from '../../config/maps'
import { missions } from '../../data/missions/testmissions'

export default function missionListener(MissionDisplay) {

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

            case interactionMap.startTestMission:

                store.dispatch({
                    type: constants.CHANGE_MISSION,
                    payload: {
                        id: missions.testMissionOne.id,
                        name: missions.testMissionOne.name,
                        description: missions.testMissionOne.description
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

    return MissionDisplay
}