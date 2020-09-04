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

    // function that returns the numerical value of the interaction occuring
    // at a given position
    function observeInteraction(pos, interactions) {
        const rowIndex = Math.round(pos[1] / constants.SPRITE_SIZE)
        const columnIndex = Math.floor(pos[0] / constants.SPRITE_SIZE)
        return interactions[rowIndex][columnIndex]
    }

    // function that is triggered when the 's' key is pressed
    // handles triggering missions on and off
    function toggleMission() {

        // get necessary state values from redux store
        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const missionID = store.getState().mission.id

        // observe the interaction defined at current position
        switch (observeInteraction(pos, interactions)) {

            // current tile should trigger test mission one
            case interactionMap.startTestMission:

                // if no mission is active
                if (missionID === null) {

                    // dispatch test mission one to redux store (turns on mission)
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: missions.testMissionOne.id,
                            startingCoordinates: missions.testMissionOne.startingCoordinates,
                            endingCoordinates: missions.testMissionOne.endingCoordinates,
                            name: missions.testMissionOne.name,
                            description: missions.testMissionOne.description,
                            missionText: missions.testMissionOne.missionText,
                            finalInteraction: missions.testMissionOne.finalInteraction,
                            missionComplete: missions.testMissionOne.missionComplete,
                        }
                    })

                    return


                } else { // if a mission is active

                    // dispatch no active mission to redux store (turns off mission)
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            endingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                    return

                }

            // current tile should trigger test mission two
            case interactionMap.startTestMissionTwo:

                // if no mission is active
                if (missionID === null) {

                    // dispatch test mission two to redux store (turns on mission)
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: missions.testMissionTwo.id,
                            startingCoordinates: missions.testMissionTwo.startingCoordinates,
                            endingCoordinates: missions.testMissionTwo.endingCoordinates,
                            name: missions.testMissionTwo.name,
                            description: missions.testMissionTwo.description,
                            missionText: missions.testMissionTwo.missionText,
                            finalInteraction: missions.testMissionTwo.finalInteraction,
                            missionComplete: missions.testMissionTwo.missionComplete,
                        }
                    })

                    return

                } else { // if a mission is active

                    // dispatch no active mission to redux store (turns mission off)
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            endingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                    return

                }

            // current tile has no interaction defined when 's' is pressed
            // will turn off any active mission
            default:

                // if no mission is active
                if (missionID === null) {

                    // do nothing
                    return

                } else { // if a mission is active

                    // dispatch no active mission to redux store (turns off mission)
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            endingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                    return

                }

        }

    }

    // function that is triggered when any key besides
    // 's' key
    // is pressed
    // used to detect when a mission is finished
    function attemptInteraction() {

        // get necessary state values from redux store
        const pos = store.getState().player.position
        const interactions = store.getState().map.ontile
        const mission = store.getState().mission

        // oberserve the interaction defined at current position
        switch (observeInteraction(pos, interactions)) {

            // no interaction is defined
            case interactionMap.noInteraction:

                // mission.id is temporarily set to missionIDMap.missionComplete
                // after a mission is complete
                // this block clears the mission complete message on the next move
                if (mission.id === missionIDMap.missionComplete) {

                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: null,
                            startingCoordinates: null,
                            endingCoordinates: null,
                            name: null,
                            description: null,
                            finalInteraction: null,
                            missionText: constants.NO_ACTIVE_MISSION,
                            missionComplete: null,
                        }
                    })

                }

                return

            // current tile has same interaction type as mission's final interaction type
            case mission.finalInteraction:

                // if current redux state meets requirements for mission complete status
                if (mission.missionComplete()) {

                    // dispatch mission complete to redux store (to temporarily display 'mission complete')
                    store.dispatch({
                        type: constants.CHANGE_MISSION,
                        payload: {
                            id: missionIDMap.missionComplete,
                            startingCoordinates: mission.startingCoordinates,
                            endingCoordinates: mission.endingCoordinates,
                            name: constants.NONE,
                            description: constants.NONE,
                            missionText: constants.MISSION_COMPLETE,
                            finalInteraction: mission.finalInteraction,
                            missionComplete: mission.missionComplete,
                        }
                    })

                }

                return

            // current tile does not have an interaction defined that mission listener needs to do anything with
            default:

                // do nothing
                return

        }

    }

    // function that is run anytime a key is pressed
    function handleKeyDown(e) {

        // prevent the key from default behavior (disables browser keyboard shortcuts)
        e.preventDefault()

        // get the key code of key pressed
        switch (e.keyCode) {

            // 's' key is pressed - used to manually start and stop missions
            case constants.s_key:

                toggleMission()

                return

            // any other key is pressed (to auto-detect mission start and stop)
            default:

                attemptInteraction()

                return
        }
    }

    // add an event listener to detect keydown
    window.addEventListener(constants.keydown, (e) => {
        handleKeyDown(e)
    })

    return MissionDisplay
}