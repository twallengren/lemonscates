import { constants } from '../../config/constants'

const initialState = {

    woodaxe: {}

}

const inventoryReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return {
                ...state,
            }

    }

}

export default inventoryReducer