import { constants } from '../../config/constants'

const initialState = {

    tiles: [],
    collision: [],
    ontile: [],

}

const mapReducer = (state = initialState, action) => {

    switch (action.type) {

        case constants.ADD_TILES:
            return {
                ...action.payload
            }

        case constants.TO_GRASS:
            return {
                collision: state.collision,
                tiles: action.payload.tiles,
                ontile: action.payload.ontile
            }

        case constants.CUT_TREE:
            return {
                tiles: action.payload.tiles,
                collision: action.payload.collision,
                ontile: state.ontile,
            }

        default:
            return {
                ...state
            }

    }

}

export default mapReducer