import { constants } from '../../config/constants'

const initialState = {

    position: [constants.SPRITE_SIZE * 5, constants.SPRITE_SIZE * 5],
    spriteLocation: '0px 0px',
    direction: constants.SOUTH,
    walkIndex: 0,
    health: 100,

}

const playerReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.MOVE_PLAYER:
            return {
                ...action.payload,
            }

        default:
            return {
                ...state
            }

    }

}

export default playerReducer