import { constants } from "../../config/constants";

const initialState = {

    message: null,

}

const infoReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.CHANGE_INFO:

            return {

                ...action.payload,

            }

        default:

            return {

                ...state,

            }

    }

}

export default infoReducer