import { constants } from '../../config/constants'

const initialState = {

    health: 100,
    carryweight: 0,

}

const statusReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.CHANGE_HEALTH:
            return {
                health: action.payload.health,
                carryweight: state.carryweight,
            }

        case constants.CHANGE_WEIGHT:
            return {
                health: state.health,
                carryweight: action.payload.carryweight
            }

        default:
            return {
                ...state,
            }

    }

}

export default statusReducer