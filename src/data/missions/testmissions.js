import { missionIDMap, interactionMap } from '../../config/maps'
import store from '../../config/store'

/////////////////////////////////////////////////////////////////////////////
// data on missions in game

export const missions = {

    testMissionOne: {
        id: missionIDMap.testMissionOne,
        startingCoordinates: [10, 10],
        name: "Test Mission One",
        description: "Collect 10 chopped wood",
        missionText: "MISSION: Collect 10 chopped wood",
        finalInteraction: interactionMap.addChoppedWood,
        missionComplete: () => { return store.getState().inventory.wood.quantity > 8 },
    },

}