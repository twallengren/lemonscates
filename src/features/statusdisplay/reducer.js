import { constants } from '../../config/constants'

const initialState = {

    health: 100,
    carryweight: 0,

}

const statusReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.LOSE_HEALTH:
            return {
                ...action.payload,
            }

        case constants.GAIN_HEALTH:
            return {
                ...action.payload,
            }

        default:
            return {
                ...state,
            }

    }

}

export default statusReducer