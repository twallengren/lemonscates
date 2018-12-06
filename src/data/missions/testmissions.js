import { missionIDMap, interactionMap } from '../../config/maps'
import store from '../../config/store'

/////////////////////////////////////////////////////////////////////////////
// data on missions in game

export const missions = {

    testMissionOne: {
        id: missionIDMap.testMissionOne,
        name: "Test Mission One",
        description: "Collect 10 piles of wood from Lemonscates",
        finalInteraction: interactionMap.addChoppedWood,
        stateToTest: () => { return store.getState().inventory.wood.quantity },
        missionComplete: (quantity) => { return quantity + 1 === 10 },
    },

}