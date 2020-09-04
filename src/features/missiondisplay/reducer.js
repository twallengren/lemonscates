import { constants } from '../../config/constants'

const initialState = {

    id: null,
    startingCoordinates: null,
    endingCoordinates: null,
    name: null,
    description: null,
    finalInteraction: null,
    missionText: constants.NO_ACTIVE_MISSION,
    missionComplete: null,

}

const missionReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.CHANGE_MISSION:
            return {
                ...action.payload
            }

        default:
            return {
                ...state,
            }

    }

}

export default missionReducer