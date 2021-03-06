import * as actionTypes from './action'

const initialState = {
    counter: 0,
    result: []
}

// console.log(initialState.counter);
const reducer = (state = initialState, action) => {
    // console.log(state.counter);
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + 1 }
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 }
        case actionTypes.ADD:
            return { ...state, counter: state.counter + action.val }
        case actionTypes.SUBTRACT:
            return { ...state, counter: state.counter - action.val }
        case actionTypes.STORE_RESULT:
            return { ...state, result: state.result.concat({ value: state.counter, id: new Date() }) }
        case actionTypes.DELETE_RESULT:
            const updatedArray=state.result.filter(result=>result.id!==action.resultID)
            return { ...state, result:updatedArray  } 
    }
    return state;
}

export default reducer