import { constants } from '../../config/constants'

const initialState = {

    // Temporary collectables (quantity is not permanent over time)
    // keep id in form 10x
    wood: {
        id: 100,
        weight: 10,
        quantity: 0,
    }

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