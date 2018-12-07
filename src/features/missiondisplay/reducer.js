import { constants } from '../../config/constants'

const initialState = {

    id: null,
    startingCoordinates: null,
    name: null,
    description: null,
    finalInteraction: null,
    stateToTest: null,
    missionText: 'No mission active. You are free to frolic.',
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