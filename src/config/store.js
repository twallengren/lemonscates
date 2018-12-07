import { createStore, combineReducers } from 'redux'
import playerReducer from '../features/player/reducer'
import mapReducer from '../features/map/reducer'
import statusReducer from '../features/statusdisplay/reducer'
import missionReducer from '../features/missiondisplay/reducer'
import inventoryReducer from '../features/inventorybar/reducer'
import infoReducer from '../features/infopanel/reducer'

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer,
    status: statusReducer,
    mission: missionReducer,
    inventory: inventoryReducer,
    info: infoReducer,
})

const store = createStore(
    rootReducer, // add reducer to the store
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // enable redux devtools
)

export default store