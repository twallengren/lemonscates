import { constants } from '../../config/constants'
import { interactionMap } from '../../config/maps'

const initialState = {

    id: null,
    name: 'None',
    description: 'You are free to frolic.',
    finalInteraction: null,
    stateToTest: null,
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