import * as actionTypes from '../action'

const initialState = {
    result: []
}

// console.log(initialState.counter);
const reducer = (state = initialState, action) => {
    // console.log(state.counter);
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return { ...state, result: state.result.concat({ value: action.counter, id: new Date() }) }
        case actionTypes.DELETE_RESULT:
            const updatedArray=state.result.filter(result=>result.id!==action.resultID)
            return { ...state, result:updatedArray  } 
    }
    return state;
}

export default reducer