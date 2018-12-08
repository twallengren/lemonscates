/*

Usage
missionListener(MissionDisplay)

Function to update mission status
Wraps MissionDisplay in an event listener and updates redux state

*/

import store from '../../config/store'
import { constants } from '../../config/constants'
import { interactionMap, missionIDMap } from '../../config/maps'
import { missions } from '../../data/missions/testmissions'

export default function missionListener(MissionDisplay) {

    function observeInteraction(pos, interactions) {
        const rowIndex = pos[1] / constants.SPRITE_SIZE
        const columnIndex = pos[0] / constants.SPRITE_SIZE
        return interactions[rowIndex][columnIndex]
    }

    function toggleMission() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const missionID = store.getState().mission.id

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.startTestMission:

                if (missionID === null) {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: missions.testMissionOne.id,
                            startingCoordinates: missions.testMissionOne.startingCoordinates,
                            name: missions.testMissionOne.name,
                            description: missions.testMissionOne.description,
                            missionText: missions.testMissionOne.missionText,
                            finalInteraction: missions.testMissionOne.finalInteraction,
                            missionComplete: missions.testMissionOne.missionComplete,
                        }
                    })

                    return

                } else {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            stateToTest: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                    return

                }

            default:

                if (missionID === null) {

                    return

                } else {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            stateToTest: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                    return

                }

        }

    }

    function attemptInteraction() {

        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const mission = store.getState().mission

        switch (observeInteraction(pos, interactions)) {

            case interactionMap.noInteraction:

                if (mission.id === missionIDMap.missionComplete) {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            stateToTest: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                }

                return

            case mission.finalInteraction:

                if (mission.missionComplete()) {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: missionIDMap.missionComplete,
                            startingCoordinates: null,
                            name: constants.NONE,
                            description: constants.NONE,
                            missionText: constants.MISSION_COMPLETE,
                            finalInteraction: null,
                            missionComplete: null,
                        }
                    })

                }

                return

            default:

                return

        }

    }

    function handleKeyDown(e) {

        e.preventDefault()

        switch (e.keyCode) {

            case constants.s_key:

                toggleMission()

                return

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