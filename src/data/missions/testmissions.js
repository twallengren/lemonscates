import { missionIDMap, interactionMap } from '../../config/maps'
import store from '../../config/store'
import { constants } from '../../config/constants';

/////////////////////////////////////////////////////////////////////////////
// data on missions in game

export const missions = {

    testMissionOne: {
        id: missionIDMap.testMissionOne,
        startingCoordinates: [10, 10],
        endingCoordinates: null,
        name: "Test Mission One",
        description: "Collect 10 chopped wood",
        missionText: "MISSION: Collect 10 chopped wood",
        finalInteraction: interactionMap.addChoppedWood,
        missionComplete: () => { return store.getState().inventory.wood.quantity > 8 },
    },

    testMissionTwo: {
        id: missionIDMap.testMissionTwo,
        startingCoordinates: [15, 15],
        endingCoordinates: [20, 20],
        name: "Test Mission Two",
        description: "Travel to the black square",
        missionText: "MISSION: Travel to the other black square",
        finalInteraction: interactionMap.stopTestMissionTwo,
        missionComplete: () => {
            const pos = store.getState().player.position
            const interactions = store.getState().map.ontile
            const rowIndex = Math.round(pos[1] / constants.SPRITE_SIZE)
            const columnIndex = Math.floor(pos[0] / constants.SPRITE_SIZE)
            return interactions[rowIndex][columnIndex] === interactionMap.stopTestMissionTwo
        }
    },

}