import { constants } from '../../config/constants'

const initialState = {

    id: 0,
    name: 'None',
    description: 'You are free to frolic.',

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