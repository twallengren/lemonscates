const initialState = {

    mission: 'None',
    description: 'You are free to frolic.'

}

const missionReducer = (state = initialState, action) => {

    switch (action.type) {

        default:
            return {
                ...state,
            }

    }

}

export default missionReducer